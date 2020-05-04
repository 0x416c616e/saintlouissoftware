var quotes = [
    'Programmers are in the enviable position of not only getting to do what they want to, but because the end result is so important they get paid to do it. There are other professions like that, but not that many.',
    'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
    'A ship in port is safe, but that\'s not what ships are built for.',
    'If you don\'t jump on the new, you don\'t survive.',
    'Wherever smart people work, doors are unlocked.',
    'Great things in business are never done by one person. They\'re done by a team of people.',
    'Information technology and business are becoming inextricably interwoven. I don\'t think anybody can talk meaningfully about one without the talking about the other.',
    'Programmers are happiest when they\'re working efficiently.',
    'UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.',
    'The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code -- not in reams of trivial code that bores the reader to death.',
    'Build what you need as you need it, aggressively refactoring as you go along; don\'t spend a lot of time planning for grandiose, unknown future scenarios. Good software can evolve into what it will ultimately become.',
    'Any sufficiently advanced technology is indistinguishable from magic.',
    'Some people, when confronted with a problem, think "I know, I\'ll use regular expressions." Now they have two problems.',
    'The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive.',
    'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
    'Every language teaches you something, so learning a language is never wasted, especially if it\'s different in more than just syntactic trivia.',
    'The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.',
    'One of my most productive days was throwing away 1,000 lines of code.',
    'Everyday life is like programming, I guess. If you love something you can put beauty into it.',
    'The key to understanding complicated things is knowing what not to look at.',
    'Mathematics is about how you think about what\'s true, following from various axioms. Computing is how you think about how to do things.',
    'Elegance is not a dispensable luxury but a factor that decides between success and failure.',
    'Program designers have a tendency to think of the users as idiots who need to be controlled. They should rather think of their program as a servant, whose master, the user, should be able to control it.',
    'Being strong-willed is not enough, however. You also have to be hard on yourself. Someone who was strong-willed but self-indulgent would not be called determined. Determination implies your willfulness is balanced by discipline.',
    'You insist that there is something a machine cannot do. If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    'Clearly, I reject the view that there is one way that is right for everyone and for every problem.',
    'Complexity is the worst enemy of security, and our systems are getting more complex all the time.',
    'Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost.',
    'Information flow is what the Internet is about. Information sharing is power. If you don\'t share your ideas, smart people can\'t do anything about them, and you\'ll remain anonymous and powerless.',
    'The best designers will use many design patterns that dovetail and intertwine to produce a greater whole.',
    'Programmers working with high-level languages achieve better productivity and quality than those working with lower-level languages.',
    'True greatness is measured by how much freedom you give to others, not by how much you can coerce others to do what you want.',
    'People think of security as a noun, something you go buy. In reality, it\'s an abstract concept like happiness. Openness is unbelievably helpful to security.',
    'Do not be afraid to fail, but also, do not be afraid to succeed.',
    'If you\'re the smartest person in the room, you\'re in the wrong room.',
    'Creativity is people who care enough to keep thinking about something until they find the simplest way to do it.',
    'If you do everything that everyone else does in business, you\'re going to lose. The only way to really be ahead, is to \'be different\'.',
    'If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.',
    'The profound aspect of technology is that once secrets are revealed, the magic doesn\'t disappear.',
    'The screen is a window through which one sees a virtual world. The challenge is to make that world look real, act real, sound real, feel real.',
    'Don\'t worry about what anybody else is going to do. The best way to predict the future is to invent it.',
    'Always deliver more than expected.'
]
var authors = [
    'Linus Torvalds',
    'Ada lovelace',
    'Grace Hopper',
    'Satya Nadella',
    'Steve Wozniak',
    'Steve Jobs',
    'Bill Gates',
    'Eric S. Raymond',
    'Dennis Ritchie',
    'Guido van Rossum',
    'Jeff Atwood',
    'Arthur C. Clarke',
    'Jamie Zawinski',
    'Steve Ballmer',
    'Alan Turing',
    'Brian Kernighan',
    'Tim Berners-Lee',
    'Ken Thompson',
    'Donald Knuth',
    'Gerald Jay Sussman',
    'Hal Abelson',
    'Edsger Dijkstra',
    'John McCarthy',
    'Paul Graham',
    'John von Neumann',
    'Bjarne Stroustrup',
    'Bruce Schneier',
    'Yukihiro Matsumoto',
    'Vint Cerf',
    'Erich Gamma',
    'Steve McConnell',
    'Larry Wall',
    'James Gosling',
    'Eric Schmidt',
    'Marissa Mayer',
    'Tim Cook',
    'Larry Ellison',
    'Jeff Bezos',
    'Ray Kurzweil',
    'Ivan Sutherland',
    'Alan Kay',
    'Larry Page'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').innerHTML = "\"" + quotes[randomNumber] + "\"";
    document.getElementById('quoteAuthor').innerHTML = authors[randomNumber];
}