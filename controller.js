const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '05a66301f72840c8a0613560f80f7357',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {
    getNewPage: (req, res) => {
        let newPage = '';
        switch(req.params.name) {
            case 'billy':
                rollbar.info('billy')
                newPage = `<header>
                <h1>Billy the Adventurer</h1>
                </header>
                <img src="./Billy.png" alt="${req.params}">
                <p>Billy was a legendary hero in the Land of Ooo who first appeared in "His Hero." Billy is idolized by Finn and Jake due to his reputation as a great warrior. However, by the time the two meet the hero, Billy no longer believes that violent heroism is the solution in stopping evil. Despite this, Finn and Jake are able to convince Billy that fighting evil is a good cause, gaining the hero's admiration and friendship.</p>
                <section>
                    <form>
                        <label for="characters">Select Character:</label>
                        <select name="characters" id="chars">
                            <option value="billy">Billy</option>
                            <option value="finn">Finn</option>
                            <option value="bmo">BMO</option>
                            <option value="jake">Jake</option>
                        </select>
                        <input type="submit">
                    </form>
                </section>`;
                break
            case 'jake':
                rollbar.info('jake')
                newPage = `<header>
                <h1>Jake the Dog</h1>
                </header>
                <img src="./jake.png" alt="${req.params}">
                <p>"Makin pancakes, makin bacon pancakes. Makin bacon and I put it in a pancake." "I'll do anything you want me to if you say my name three times." Stretchy boi.</p>
                <section>
                    <form>
                        <label for="characters">Select Character:</label>
                        <select name="characters" id="chars">
                            <option value="billy">Billy</option>
                            <option value="finn">Finn</option>
                            <option value="bmo">BMO</option>
                            <option value="jake">Jake</option>
                        </select>
                        <input type="submit">
                    </form>
                </section>`;
                break
            case 'finn':
                rollbar.info('finn')
                newPage = `<header>
                <h1>Finn the Human</h1>
                </header>
                <img src="./finn.png" alt="${req.params}">
                <p>"I'm a buff baby that can dance like a man,
                I can shake-ah my fanny, I can shake-ah my can!
                I'm a tough tootin' baby, I can punch-ah yo buns!
                Punch-ah yo buns, I can punch-ah yo buns!
                If you're an evil witch, I will punch you for fun!"</p>
                <section>
                    <form>
                        <label for="characters">Select Character:</label>
                        <select name="characters" id="chars">
                            <option value="billy">Billy</option>
                            <option value="finn">Finn</option>
                            <option value="bmo">BMO</option>
                            <option value="jake">Jake</option>
                        </select>
                        <input type="submit">
                    </form>
                </section>`;
                break
            case 'bmo':
                rollbar.info('bmo')
                newPage = `<header>
                <h1>BMO</h1>
                </header>
                <img src="./bmo.png" alt="${req.params}">
                <p>One of the many functions BMO has is the ability to send users into a video game through their main-brain-game-frame by pressing a button located under their d-pad. By doing this, users are able to play the game in a virtual reality where they can physically complete objectives, with the possible risk of actual death. This process can also be reversed, and things within the game can be transported into the real world. BMO also possesses several attachments which allows them to perform various tasks aside from video games. This includes the ability to put up a holographic display of their screen to support a wider audience. BMO also possesses editing software for film creation, but they have a personal choice regarding the footage that is actually used to make up their films.</p>
                <section>
                    <form>
                        <label for="characters">Select Character:</label>
                        <select name="characters" id="chars">
                            <option value="billy">Billy</option>
                            <option value="finn">Finn</option>
                            <option value="bmo">BMO</option>
                            <option value="jake">Jake</option>
                        </select>
                        <input type="submit">
                    </form>
                </section>`;
                break
        }
        res.status(200).send(newPage)
    }
}