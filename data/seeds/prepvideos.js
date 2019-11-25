const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
      return knex('days').insert([
            {
                id: 1,
                number: 1,
                day_id: 1,
                name: 'Semantic HTML',
                url: 'https://www.youtube.com/watch?v=mJkb00lk6rk&feature=emb_logo',
            },
            {
                id: 2,
                number: 2,
                day_id: 1,
                name: 'CSS Selectors',
                url: 'https://www.youtube.com/watch?v=71Re0ld_ES0&feature=emb_logo',
            },
            {
                id: 3,
                number: 3,
                day_id: 1,
                name: 'CSS Specificity',
                url: 'https://www.youtube.com/watch?v=uN-yD5usiR0&feature=emb_logo',
            },
            {
                id: 4,
                number: 1,
                day_id: 2,
                name: 'Introduction to the Terminal',
                url: 'https://www.youtube.com/watch?v=vJ-9Fh2KbXk&feature=emb_logo',
            },
            {
                id: 5,
                number: 2,
                day_id: 2,
                name: 'Introduction to Version Control and Git',
                url: 'https://www.youtube.com/watch?v=a8e3kF2zYtk&feature=emb_logo',
            },
            {
                id: 6,
                number: 3,
                day_id: 2,
                name: 'Git 1: Fork and Clone',
                url: 'https://www.youtube.com/watch?time_continue=1&v=TfcuaW-YjwQ&feature=emb_logo',
            },
            {
                id: 7,
                number: 4,
                day_id: 2,
                name: 'GIt 2: Add/Commit/Push',
                url: 'https://www.youtube.com/watch?v=TIsXqSNFSV0&feature=emb_logo',
            },
            {
                id: 8,
                number: 5,
                day_id: 2,
                name: 'Git 3: Pull Requests',
                url: 'https://www.youtube.com/watch?v=GFdOSl-Zmlo&feature=emb_logo',
            },
            {
                id: 9,
                number: 6,
                day_id: 2,
                name: 'Git Flow',
                url: 'https://youtu.be/cSoHP7WSsEg',
            },
            {
                id: 10,
                number: 1,
                day_id: 3,
                name: 'Box model',
                url: 'https://youtu.be/0tUUFdkTybs',
            },
            {
                id: 11,
                number: 2,
                day_id: 3,
                name: 'Display Properties',
                url: 'https://youtu.be/0352NDaFNP8',
            },
            {
                id: 12,
                number: 3,
                day_id: 3,
                name: 'CSS Resets',
                url: 'https://youtu.be/-TVGmd81Vow',
            },
            {
                id: 13,
                number: 1,
                day_id: 4,
                name: 'Flexbox Module',
                url: 'https://youtu.be/mUZTNxqZnB8',
            },
            {
                id: 14,
                number: 2,
                day_id: 4,
                name: 'Flexbox Container Properties',
                url: 'https://youtu.be/VcIcankxOfo',
            },
            {
                id: 15,
                number: 1,
                day_id: 6,
                name: 'Different Layout Types',
                url: 'https://youtu.be/qfEicK3gJ9E',
            },
            {
                id: 16,
                number: 2,
                day_id: 6,
                name: 'Media Queries',
                url: 'https://youtu.be/q3TcW9mTklU',
            },
            {
                id: 17,
                number: 3,
                day_id: 6,
                name: 'Mobile First Design',
                url: 'https://youtu.be/KgCa18XA0GU',
            },
            {
                id: 18,
                number: 1,
                day_id: 7,
                name: 'Responsive Design II - Units',
                url: 'https://youtu.be/H376eVtXfYg',
            },
            {
                id: 19,
                number: 2,
                day_id: 7,
                name: 'Responsive Design II - Accessibility',
                url: 'https://youtu.be/hPLesMhuVR8',
            },
            {
                id: 20,
                number: 1,
                day_id: 8,
                name: 'PC Install: Node, Git Bash, Yarn, LESS, LESS Watch Compiler',
                url: 'https://youtu.be/xdwZb_GcqbI',
            },
            {
                id: 21,
                number: 2,
                day_id: 8,
                name: 'Mac Install Instructions for Node, Yarn, Less, and less-watch-compiler',
                url: 'https://youtu.be/PHHxdNrDBnc',
            },
            {
                id: 22,
                number: 3,
                day_id: 8,
                name: 'Preprocessors - II (Mixins, Nesting, Operators, Variables)',
                url: 'https://youtu.be/Kul8Temilk4',
            },
            {
                id: 23,
                number: 1,
                day_id: 9,
                name: 'Preprocessors - II (Functions, Parametric Mixins)',
                url: 'https://youtu.be/WStXamzwi_8',
            },
            {
                id: 24,
                number: 2,
                day_id: 9,
                name: 'Preprocessors - II (LESS imports)',
                url: 'https://youtu.be/JwDYMcnXiSo',
            },
            {
                id: 25,
                number: 1,
                day_id: 11,
                name: 'Function Basics',
                url: 'https://youtu.be/A3osW_wRH0U',
            },
            {
                id: 26,
                number: 2,
                day_id: 11,
                name: 'JavaScript I - Objective Video: Variables',
                url: 'https://youtu.be/EOlgY__Ml0c',
            },
            {
                id: 27,
                number: 3,
                day_id: 11,
                name: 'JavaScript I - Objective Video: Object Literals',
                url: 'https://youtu.be/VLrBkmLZIYs',
            },
            {
                id: 28,
                number: 4,
                day_id: 11,
                name: 'Arrays in JavaScript',
                url: 'https://youtu.be/TaaCNAjpaa8',
            },
            {
                id: 29,
                number: 1,
                day_id: 12,
                name: 'Closures',
                url: 'https://youtu.be/AgBoMqDO-08',
            },
            {
                id: 30,
                number: 2,
                day_id: 12,
                name: 'Callbacks in JavaScript',
                url: 'https://youtu.be/zIRN-Gn8phU',
            },
            {
                id: 31,
                number: 3,
                day_id: 12,
                name: 'Array Methods',
                url: 'https://youtu.be/YNubYbAhtys',
            },
            {
                id: 32,
                number: 1,
                day_id: 13,
                name: 'The this keyword in JavaScript',
                url: 'https://youtu.be/RivFFKFbpXo',
            },
            {
                id: 33,
                number: 2,
                day_id: 13,
                name: 'Constructors & Prototypes',
                url: 'https://youtu.be/5jjDXm-f0SI',
            },
            {
                id: 34,
                number: 1,
                day_id: 14,
                name: 'Classes',
                url: 'https://youtu.be/D3Yx_ohAet4',
            },
            {
                id: 35,
                number: 2,
                day_id: 14,
                name: 'Converting Constructors into Classes',
                url: 'https://youtu.be/gnDkLbeof60',
            },
            {
                id: 36,
                number: 1,
                day_id: 16,
                name: '',
                url: '',
            },
        ]
    );
}