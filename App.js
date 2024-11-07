const heading = React.createElement("h1", {id:"heading"}, "From React")

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"))

/* root.render(heading) */

const parent = React.createElement("div", {id:"parent"},[
     
    React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "inner1"),
        React.createElement("h2", {}, "inner2")   
        ]
    ),
     
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "inner1"),
        React.createElement("h2", {}, "inner2")   
        ]
    )
]
)

root.render(parent)