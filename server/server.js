const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.use(cors({
    origin: 'http://localhost:3000'
}));


let poems =  [
    {"id": 0, "title": "Colourblind","author": "Malachi Mashiah",
    "text": `I hope you guys like my website, hopefully the colours
    aren't too over the top as I'm a little colourblind so I'm mostly 
    reffering to pastel colour values :)`,
    "votes": 3
    },
    {"id": 1, "title": "The Red Wheelbarrow",
    "author": "William Carlos Williams",
    "text": `so much depends
    upon  
    a red wheel 
    barrow  
    glazed with rain
    water  
    beside the white
    chickens
       `,
    "votes": 1
    },
    {"id": 2, "title": "The Waste Land","author": "Il Miglior Fabbro",
    "text": `April is the cruellest month, breeding
Lilacs out of the dead land, mixing
Memory and desire, stirring
Dull roots with spring rain.
Winter kept us warm, covering
Earth in forgetful snow, feeding
A little life with dried tubers.
Summer surprised us, coming over the Starnbergersee
With a shower of rain; we stopped in the colonnade,
And went on in sunlight, into the Hofgarten,
And drank coffee, and talked for an hour.
Bin gar keine Russin, stamm’ aus Litauen, echt deutsch.
And when we were children, staying at the arch-duke’s,
My cousin’s, he took me out on a sled,
And I was frightened. He said, Marie,
Marie, hold on tight. And down we went.
In the mountains, there you feel free.
I read, much of the night, and go south in the winter.  

April is the cruellest month, breeding
Lilacs out of the dead land, mixing
Memory and desire, stirring
Dull roots with spring rain.
Winter kept us warm, covering
Earth in forgetful snow, feeding
A little life with dried tubers.
Summer surprised us, coming over the Starnbergersee
With a shower of rain; we stopped in the colonnade,
And went on in sunlight, into the Hofgarten,
And drank coffee, and talked for an hour.
Bin gar keine Russin, stamm’ aus Litauen, echt deutsch.
And when we were children, staying at the arch-duke’s,
My cousin’s, he took me out on a sled,
And I was frightened. He said, Marie,
Marie, hold on tight. And down we went.
In the mountains, there you feel free.
I read, much of the night, and go south in the winter.  

_Frisch weht der Wind
Der Heimat zu
Mein Irisch Kind,
Wo weilest du?_  

“You gave me hyacinths first a year ago;
“They called me the hyacinth girl.”
—Yet when we came back, late, from the Hyacinth garden,
Your arms full, and your hair wet, I could not
Speak, and my eyes failed, I was neither
Living nor dead, and I knew nothing,
Looking into the heart of light, the silence.
Oed’ und leer das Meer.  

Madame Sosostris, famous clairvoyante,
Had a bad cold, nevertheless
Is known to be the wisest woman in Europe,
With a wicked pack of cards. Here, said she,
Is your card, the drowned Phoenician Sailor,
(Those are pearls that were his eyes. Look!)
Here is Belladonna, the Lady of the Rocks,
The lady of situations.
Here is the man with three staves, and here the Wheel,
And here is the one-eyed merchant, and this card,
Which is blank, is something he carries on his back,
Which I am forbidden to see. I do not find
The Hanged Man. Fear death by water.
I see crowds of people, walking round in a ring.
Thank you. If you see dear Mrs. Equitone,
Tell her I bring the horoscope myself:
One must be so careful these days.  

Unreal City,
Under the brown fog of a winter dawn,
A crowd flowed over London Bridge, so many,
I had not thought death had undone so many.
Sighs, short and infrequent, were exhaled,
And each man fixed his eyes before his feet.
Flowed up the hill and down King William Street,
To where Saint Mary Woolnoth kept the hours
With a dead sound on the final stroke of nine.
There I saw one I knew, and stopped him, crying: “Stetson!
“You who were with me in the ships at Mylae!
“That corpse you planted last year in your garden,
“Has it begun to sprout? Will it bloom this year?
“Or has the sudden frost disturbed its bed?
“Oh keep the Dog far hence, that’s friend to men,
“Or with his nails he’ll dig it up again!
“You! hypocrite lecteur!—mon semblable,—mon frère!”`,
    "votes": 3
    },
    {"id": 3, "title": "One Art","author": "Elizabeth Bishop",
    "text": `The art of losing isn’t hard to master;
so many things seem filled with the intent
to be lost that their loss is no disaster.  

Lose something every day. Accept the fluster
of lost door keys, the hour badly spent.
The art of losing isn’t hard to master.  

Then practice losing farther, losing faster:
places, and names, and where it was you meant
to travel. None of these will bring disaster.  

I lost my mother’s watch. And look! my last, or
next-to-last, of three loved houses went.
The art of losing isn’t hard to master.  

I lost two cities, lovely ones. And, vaster,
some realms I owned, two rivers, a continent.
I miss them, but it wasn’t a disaster.  

—Even losing you (the joking voice, a gesture
  I love) I shan’t have lied. It’s evident
  the art of losing’s not too hard to master
  though it may look like (_Write_ it!) like disaster.`,
    "votes": 6
    },
    {"id": 4, "title": "The Road Not Taken","author": "Robert Frost",
    "text": `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;  

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.  

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.
`,
    "votes": 2
    }
  ]

app.get('/', (request, response) => {
  if (request.header('bob') == "Bobalooba") {
    response.send('<h1> why are you looking here? </h1>')
  } else {
    response.status(401).send("Unauthorised")
  }
})

app.get('/api/poems', (request, response) => {
  if (request.header('bob') == "Bobalooba") {
    response.json(poems)
  } else {
    response.status(401).send("Unauthorised")
  }
})

app.get('/api/poems/:id', (request, response) => {
    if (request.header('bob') == "Bobalooba") {
      const id = Number(request.params.id)
      const poem = poems.find(poem => poem.id === id)
      if (poem) {
          response.json(poem)
      }
      else {
          response.status(404).end()
      }
    } else {
      response.status(401).send("Unauthorised")
    }
})

app.delete('/api/poems/:id', (request, response) => {
  if (request.header('bob') == "Bobalooba") {
    const id = Number(request.params.id)
    const poem = poems.find(poem => poem.id === id)
    if (poem) {
        poems = poems.filter(poem => poem.id !== id)
        response.json(poem)
    }
    else {
        response.status(404).send("Poem not found")
    }
  } else {
    response.status(401).send("Unauthorised")
  }
})

app.post('/api/poems/:id', (request, response) => {
  if (request.header('bob') == "Bobalooba") {
    const id = Number(request.params.id)
    const poem = poems.find(poem => poem.id === id)
    if (poem) {
      poem.votes++
      response.json(poem)
    }
    else {
      response.status(404).end()
    }
  } else {

    response.status(401).send("Unauthorised")
  }
})

app.post('/api/poems', (request, response) => {
  if (request.header('bob') == "Bobalooba") {
    const body = request.body

    if (!body.title || !body.author || !body.text) {
        return response.status(400).json({
            error: 'Missing title, author or body.'
        })
    }
        
    const poem = {
        id: generateId(),
        title: body.title,
        author: body.author,
        text: body.text,
        votes: 0
    }

    //poem.id = generateId()
    poems = poems.concat(poem)
    response.json(poem)
  } else {
    response.status(401).send("Unauthorised")
  }
})

const generateId = () => {
  const maxId = poems.length > 0
  ? Math.max(...poems.map(p => p.id))
  : 0
  return maxId +1
}

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`server is running on port ${PORT}`)