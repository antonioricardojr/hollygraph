var directors = ['Vincente Minnelli', 'Edmund Goulding', 'Ingmar Bergman', 'Goran Markovic', 'Danny Boyle', 'Carol Reed', 'Mike Leigh', 'Michael Powell', 'Emir Kusturica', 'William A. Wellman', 'Otto Preminger', 'Lloyd Bacon', 'Shimit Amin', 'Zeki Demirkubuz', 'Michelangelo Antonioni', 'Jules Dassin', 'Goran Paskaljevic', 'Shekhar Kapur', 'Roman Polanski', 'David Fincher', 'Emeric Pressburger', 'Roberto Rossellini', 'John Frankenheimer', 'Richard Brooks', 'Alan Parker', 'Ertem Egilmez', 'Robert Zemeckis', 'John Sturges', 'Hrishikesh Mukherjee', 'John Cassavetes', 'Hirokazu Koreeda', 'Stanley Kubrick', 'Andrei Tarkovsky', 'Andy Wachowski', 'Lucian Pintilie', 'Alain Resnais', 'Tomás Gutiérrez Alea', 'Marco Tullio Giordana', 'Nae Caranfil', 'Luis García Berlanga', 'Aki Kaurismäki', 'Josef von Sternberg', 'Kar Wai Wong', 'John Ford', 'D.W. Griffith', 'Juan José Campanella', 'Michael Curtiz', 'Robert Wise', 'George Lucas', 'Vladimir Menshov', 'Hideaki Anno', 'William Wyler', 'Carl Theodor Dreyer', 'Steven Spielberg', 'Max Ophüls', 'Anurag Kashyap', 'Jack Conway', 'Stanley Donen', 'Tony Kaye', 'Joseph L. Mankiewicz', 'Srdjan Dragojevic', 'Irvin Kershner', 'Giuseppe Tornatore', 'James Whale', 'Andrew Stanton', 'diretor', 'Lars von Trier', 'Masaki Kobayashi', 'Mani Ratnam', 'Terry Jones', 'George Cukor', 'Leonid Gayday', 'Mamoru Oshii', 'Thomas Vinterberg', 'King Vidor', 'Sergio Leone', 'Béla Tarr', 'Bryan Singer', 'Paul Thomas Anderson', 'Michael Haneke', 'Yasujirô Ozu', 'William Dieterle', 'Elia Kazan', 'Sam Wood', 'Quentin Tarantino', 'Yimou Zhang', 'Fatih Akin', 'Henry King', 'Rob Reiner', 'Georgiy Daneliya', 'Ettore Scola', 'Cecil B. DeMille', 'Henri-Georges Clouzot', 'Mikhail Kalatozov', 'Jean-Luc Godard', 'John Huston', 'Ronald Neame', 'Theodoros Angelopoulos', 'David Lynch', 'Kenji Misumi', 'Fred Zinnemann', 'Takeshi Kitano', 'Hiroshi Teshigahara', 'John Cromwell', 'Alfonso Cuarón', 'Luchino Visconti', 'Vittorio De Sica', 'Erich von Stroheim', 'Asghar Farhadi', 'Terry Gilliam', 'Moustapha Akkad', 'Raoul Walsh', 'James Cameron', 'Edward Zwick', 'Billy Wilder', 'Peter Jackson', 'Arthur Penn', 'Blake Edwards', 'Federico Fellini', 'David Lean', 'Edward Sedgwick', 'Jean Renoir', 'Fernando Meirelles', 'Leo McCarey', 'Wim Wenders', 'Michael Mann', 'Darren Aronofsky', 'Ridley Scott', 'Edward Yang', 'Robert Aldrich', 'Stanley Kramer', 'Robert Altman', 'Mario Monicelli', 'Yash Chopra', 'Sergei M. Eisenstein', 'Orson Welles', 'Dusan Kovacevic', 'Pedro Almodóvar', 'Kátia Lund', 'Shôhei Imamura', 'Oliver Stone', 'Zeki Ökten', 'Yoshishige Yoshida', 'Frank Darabont', 'Don Siegel', 'W.S. Van Dyke', 'Lee Unkrich', 'Kaneto Shindô', 'Ang Lee', 'Sidney Lumet', 'Franklin J. Schaffner', 'Slobodan Sijan', 'Abbas Kiarostami', 'Lasse Hallström', 'Isao Takahata', 'George Roy Hill', 'Francis Ford Coppola', 'Victor Fleming', 'F.W. Murnau', 'Orhan Aksoy', 'Jirí Menzel', 'Costa-Gavras', "Bozidar 'Bota' Nikolic", 'Jacques Becker', 'Nicholas Ray', 'Yasuzô Masumura', 'Yôji Yamada', 'Paul Greengrass', 'Alfred Hitchcock', 'Nuri Bilge Ceylan', 'Milos Forman', 'Victor Sjöström', 'François Truffaut', 'Luis Buñuel', 'Peter Bogdanovich', 'Roberto Benigni', 'Marcel Carné', 'Wen Jiang', 'Jim Sheridan', 'Denis Villeneuve', 'Andrzej Wajda', 'Spike Lee', 'Ethan Coen', 'Jim Jarmusch', 'Jean-Pierre Jeunet', 'Wes Anderson', 'William Friedkin', 'Richard Linklater', 'Ron Howard', 'Nesli Çölgeçen', 'Howard Hawks', 'Louis Malle', 'Jean-Pierre Melville', 'Dariush Mehrjui', 'Akira Kurosawa', 'Nikita Mikhalkov', 'Tim Burton', 'Claude Berri', 'Majid Majidi', 'Woody Allen', 'Vishal Bhardwaj', 'Clint Eastwood', 'Pietro Germi', 'Ken Loach', 'Fritz Lang', 'Yavuz Turgul', 'Peter Weir', 'Ernst Lubitsch', 'Dragan Bjelogrlic', 'Robert Bresson', 'John McTiernan', 'Frank Capra', 'Eric Rohmer', 'Eldar Ryazanov', 'Ashutosh Gowariker', 'Chang-dong Lee', 'Jonathan Demme', 'Ki-duk Kim', 'George Stevens', 'Farhan Akhtar', 'Damián Szifrón', 'Guy Ritchie', 'Brad Bird', 'John Woo', 'Buster Keaton', 'Kenji Mizoguchi', 'Çagan Irmak', 'Charles Chaplin', 'Preston Sturges', 'Rainer Werner Fassbinder', 'Werner Herzog', 'Sam Mendes', 'Hal Ashby', 'Serdar Akar', 'Martin Scorsese', 'Rajkumar Santoshi', 'Mervyn LeRoy', 'Christopher Nolan', 'Chan-wook Park', 'Ram Gopal Varma', 'Luc Besson', 'Krzysztof Kieslowski', 'Brian De Palma', 'Hayao Miyazaki', 'Atif Yilmaz', 'Rajkumar Hirani', 'Sam Peckinpah', 'Satyajit Ray']

$(document).ready(
    function () {
      $( "#search" ).autocomplete({
        source:directors,
        autoFocus: true
      });
    }
);

$("#go_button").click(function(){
    var value = $( "#search").val()
    console.log("director.html?director="+value)
    $("#go_link").attr("href", "director.html?director="+value);
});