import {Meteor} from 'meteor/meteor';

import {Polls} from '../../api/polls/polls';


const mockPolls = [
    {
        title: 'First poll',
        createdBy: 'Hf9wt6Z3JHrLLG98A',
        createdAt: new Date(),
        isPublic: false,
    },

    {
        title: 'Second poll',
        createdBy: 'Hf9wt6Z3JHrLLG98A',
        createdAt: new Date(),
        isPublic: true,
    },

    {
        title: 'Third poll',
        createdBy: 'Hf9wt6Z3JHrLLG99A',
        createdAt: new Date(),
        isPublic: true,
    },
];


const createDefaultPolls = () => {
    if (Polls.find().count() === 0) {
        mockPolls.forEach(poll => Polls.insert(poll));
    }
};


Meteor.startup(createDefaultPolls);
