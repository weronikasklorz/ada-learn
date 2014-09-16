//That's my first application in Angular.

(function () {

    //data
    var exercises = [
        {
            id: 1, exerciseNumber: '1',
            part: '',
            task: 'Nothing here yet.'
        },
        {
            id: 2,
            exerciseNumber: '2',
            part: '',
            task: 'Nothing here yet.'
        },
        {
            id: 3,
            exerciseNumber: '3A',
            part: 'Vocabulary',
            task: 'Label the weather symbols.',
            examples: [{ idE: 1, correctAnswer: 'snowing'},
                { idE: 2, correctAnswer: 'cloudy' },
                { idE: 3, correctAnswer: 'raining' },
                { idE: 4, correctAnswer: 'foggy' },
                { idE: 5, correctAnswer: 'windy' },
                { idE: 6, correctAnswer: 'sunny' }]
        },
        {
            id: 4,
            exerciseNumber: '3B',
            part: 'Vocabulary',
            task: 'What school activities do you see on the picture?',
            examples: [{ idE: 1, correctAnswer: 1, text: 'doing a project' },
                { idE: 2, correctAnswer: 2, text: 'enjoying a field trip' },
                { idE: 3, correctAnswer: 3, text: 'working on computers' },
                { idE: 4, correctAnswer: 4, text: 'taking a test' },
                { idE: 5, correctAnswer: 5, text: 'giving a presentation' },
                { idE: 6, correctAnswer: 6, text: 'practicing yoga'}]
        },
        {
            id: 5,
            exerciseNumber: '4',
            part: '',
            task: 'Nothing here yet.'
        }
    ]


    var app = angular.module('recruitment-app', []);

    app.controller('recruitment-app-controller', function () {
        this.exercises = exercises;
        this.clicked = false;
        //check answers in exercise and paint inside inputs (pink - incorrect answer, green - correct answer)
        //Also count points and show on the yellow background under click button
        this.check = function (id, ans1, ans2, ans3, ans4, ans5, ans6) {

            this.points = 0;
            if (ans1.toLowerCase() == this.exercises[id].examples[0].correctAnswer) { this.myStyle1 = this.correctColor; this.points++; }
            else this.myStyle1 = this.incorrectColor;
            if (ans2.toLowerCase() == this.exercises[id].examples[1].correctAnswer) { this.myStyle2 = this.correctColor; this.points++; }
            else this.myStyle2 = this.incorrectColor;
            if (ans3.toLowerCase() == this.exercises[id].examples[2].correctAnswer) { this.myStyle3 = this.correctColor; this.points++; }
            else this.myStyle3 = this.incorrectColor;
            if (ans4.toLowerCase() == this.exercises[id].examples[3].correctAnswer) { this.myStyle4 = this.correctColor; this.points++; }
            else this.myStyle4 = this.incorrectColor;
            if (ans5.toLowerCase() == this.exercises[id].examples[4].correctAnswer) { this.myStyle5 = this.correctColor; this.points++; }
            else this.myStyle5 = this.incorrectColor;
            if (ans6.toLowerCase() == this.exercises[id].examples[5].correctAnswer) { this.myStyle6 = this.correctColor; this.points++; }
            else this.myStyle6 = this.incorrectColor;
            this.clicked = true;
            return this.points;
        }


        /*
            a little motivation ;) 
        */
        this.pointsComments = [
          'Are you kidding? Try again!',
          'Very bad! Do something with this!',
          "Oh, poor result... don't give up! Train more!",
          "Only three points? Don't be lazy... work harder!",
          'Not so bad, but you can better!',
          'Nice!',
          'Excellent!',
        ]

        //can see inside inputs after checking answer
        this.correctColor = { 'background-color': '#a7ff15' }
        this.incorrectColor = { 'background-color': 'pink' }

        /*reset textboxes and colors inside inputs*/
        this.reset = function () {
            this.myStyle1 = {};
            this.myStyle2 = {};
            this.myStyle3 = {};
            this.myStyle4 = {};
            this.myStyle5 = {};
            this.myStyle6 = {};
            this.points = -1;

            this.answers1 = "";
            this.answers2 = "";
            this.answers3 = "";
            this.answers4 = "";
            this.answers5 = "";
            this.answers6 = "";
            this.clicked = false;
        }

    });

})();

