const db = require('../config/connection');
const { User, Snippet } = require('../models');
const userSeeds = require('./userSeeds.json');
const snippetSeeds = require('./snippetSeeds.json');

db.once('open', async () => {
    try {
        await Snippet.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < snippetSeeds.length; i++) {
            const { _id, author } = await Snippet.create(snippetSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: author },
                {
                    $addToSet: {
                        snippets: { _id },
                    },
                },
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seed data is complete!');
    process.exit(0);
});
