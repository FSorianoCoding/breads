const React = require('react')
const baker = require('../controllers/bakers_controller')
const Default = require('./layouts/Default')

function Index({ breads, bakers, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    breads.map((bread) => {
                        return (
                            <li key={baker.id}>
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
            <div className="backButton">
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}


module.exports = Index
