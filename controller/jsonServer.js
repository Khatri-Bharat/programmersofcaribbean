function getRandomNumber(s, e) {
	var r = (Math.random())*(e+1-s);
	r += s;
	return Math.floor(r);
}

var firstNames = ['Sophia', 'Emma', 'Isabella', 'Jacob', 'Mason', 'Ethan', 'Noah', 'Olivia', 'William', 'Liam', 'Jayden', 'Michael', 'Ava', 'Alexander', 'Aiden', 'Daniel', 'Matthew', 'Elijah', 'Emily', 'James', 'Anthony', 'Benjamin', 'Abigail', 'Joshua', 'Andrew', 'David', 'Joseph', 'Logan', 'Jackson', 'Mia', 'Christopher', 'Gabriel', 'Madison', 'Samuel', 'Ryan', 'Lucas', 'John', 'Nathan', 'Isaac', 'Dylan', 'Caleb', 'Elizabeth', 'Chloe', 'Christian', 'Landon', 'Jonathan', 'Carter', 'Ella', 'Luke', 'Owen', 'Brayden', 'Avery', 'Gavin', 'Wyatt', 'Addison', 'Isaiah', 'Aubrey', 'Henry', 'Eli', 'Hunter', 'Lily', 'Jack', 'Natalie', 'Evan', 'Sofia', 'Jordan', 'Nicholas', 'Tyler', 'Aaron', 'Charlotte', 'Zoey', 'Jeremiah', 'Julian', 'Cameron', 'Grace', 'Hannah', 'Amelia', 'Harper', 'Levi', 'Lillian', 'Brandon', 'Angel', 'Austin', 'Connor', 'Adrian', 'Robert', 'Samantha', 'Charles', 'Evelyn', 'Victoria', 'Thomas', 'Brooklyn', 'Sebastian', 'Zoe', 'Colton', 'Jaxon', 'Layla', 'Kevin', 'Zachary', 'Ayden', 'Dominic', 'Blake', 'Jose', 'Hailey', 'Oliver', 'Justin', 'Bentley', 'Leah', 'Jason', 'Chase', 'Ian', 'Kaylee', 'Anna', 'Aaliyah', 'Gabriella', 'Josiah', 'Allison', 'Parker', 'Xavier', 'Nevaeh', 'Alexis', 'Adam', 'Audrey', 'Cooper', 'Savannah', 'Sarah', 'Alyssa', 'Claire', 'Taylor', 'Riley', 'Camila', 'Nathaniel', 'Arianna', 'Ashley', 'Grayson', 'Jace', 'Brianna', 'Carson', 'Sophie', 'Peyton', 'Nolan', 'Tristan', 'Luis', 'Brody', 'Bella', 'Khloe', 'Genesis', 'Alexa', 'Juan', 'Hudson', 'Serenity', 'Kylie', 'Aubree', 'Scarlett', 'Bryson', 'Carlos', 'Stella', 'Maya', 'Easton', 'Katherine', 'Julia', 'Damian', 'Alex', 'Kayden', 'Ryder', 'Lucy', 'Madelyn', 'Jesus', 'Cole', 'Autumn', 'Makayla', 'Kayla', 'Mackenzie', 'Micah', 'Vincent', 'Max', 'Lauren', 'Jaxson', 'Gianna', 'Eric', 'Ariana', 'Asher', 'Hayden', 'Faith', 'Alexandra', 'Melanie', 'Sydney', 'Bailey', 'Caroline', 'Naomi', 'Morgan', 'Kennedy', 'Ellie', 'Jasmine', 'Eva', 'Skylar', 'Diego', 'Kimberly', 'Violet', 'Molly', 'Miles', 'Steven', 'Aria', 'Ivan', 'Jocelyn', 'Trinity', 'Elias', 'Aidan', 'Maxwell', 'London', 'Bryce', 'Lydia', 'Madeline', 'Antonio', 'Giovanni', 'Reagan', 'Timothy', 'Bryan', 'Piper', 'Andrea', 'Santiago', 'Annabelle', 'Maria', 'Colin', 'Richard', 'Braxton', 'Kaleb', 'Brooke', 'Kyle', 'Kaden', 'Preston', 'Payton', 'Miguel', 'Jonah', 'Paisley', 'Paige', 'Lincoln', 'Ruby', 'Nora', 'Riley', 'Mariah', 'Leo', 'Victor', 'Brady', 'Jeremy', 'Mateo', 'Brian', 'Jaden', 'Ashton', 'Patrick', 'Rylee', 'Declan', 'Lilly', 'Brielle', 'Sean', 'Joel', 'Gael', 'Sawyer', 'Alejandro', 'Jade', 'Marcus', 'Destiny', 'Leonardo', 'Jesse', 'Caden', 'Jake', 'Kaiden', 'Nicole', 'Mila', 'Wesley', 'Kendall', 'Liliana', 'Camden', 'Kaitlyn', 'Natalia', 'Sadie', 'Edward', 'Brantley', 'Jordyn', 'Roman', 'Vanessa', 'Mary', 'Mya', 'Penelope', 'Isabelle', 'Alice', 'Axel', 'Silas', 'Jude', 'Grant', 'Reese', 'Gabrielle', 'Hadley', 'Katelyn', 'Angelina', 'Rachel', 'Isabel', 'Eleanor', 'Cayden', 'Emmanuel', 'George', 'Clara', 'Brooklynn', 'Jessica', 'Maddox', 'Malachi', 'Bradley', 'Alan', 'Weston', 'Elena', 'Gage', 'Aliyah', 'Vivian', 'Laila', 'Sara', 'Amy', 'Devin', 'Eliana', 'Greyson', 'Lyla', 'Juliana', 'Kenneth', 'Mark', 'Oscar', 'Tanner', 'Rylan', 'Valeria', 'Adriana', 'Nicolas', 'Makenzie', 'Harrison', 'Elise', 'Mckenzie', 'Derek', 'Quinn', 'Delilah', 'Peyton', 'Ezra', 'Cora', 'Kylee', 'Tucker', 'Emmett', 'Avery', 'Cody', 'Rebecca', 'Gracie', 'Izabella', 'Calvin', 'Andres', 'Jorge', 'Abel', 'Paul', 'Abraham', 'Kai', 'Josephine', 'Alaina', 'Michelle', 'Jennifer', 'Collin', 'Theodore', 'Ezekiel', 'Eden', 'Omar', 'Jayce', 'Valentina', 'Conner', 'Bennett', 'Aurora', 'Catherine', 'Stephanie', 'Trevor', 'Valerie', 'Eduardo', 'Peter', 'Maximus', 'Jayla', 'Jaiden', 'Willow', 'Jameson', 'Seth', 'Daisy', 'Alana', 'Melody', 'Hazel', 'Kingston', 'Summer', 'Melissa', 'Javier', 'Margaret', 'Travis', 'Kinsley', 'Kinley', 'Garrett', 'Everett', 'Ariel', 'Lila', 'Graham', 'Giselle', 'Ryleigh', 'Xander', 'Haley', 'Julianna', 'Ivy', 'Alivia', 'Cristian', 'Brynn', 'Damien', 'Ryker', 'Griffin', 'Keira', 'Daniela', 'Aniyah', 'Angela', 'Kate', 'Londyn', 'Corbin', 'Myles', 'Hayden', 'Harmony', 'Adalyn', 'Luca', 'Zane', 'Francisco', 'Ricardo', 'Alexis', 'Stephen', 'Zayden', 'Megan', 'Allie', 'Gabriela', 'Iker', 'Drake', 'Alayna', 'Lukas', 'Presley', 'Charlie', 'Spencer', 'Zion', 'Erick', 'Jenna', 'Josue', 'Alexandria', 'Ashlyn', 'Adrianna', 'Jada', 'Jeffrey', 'Trenton', 'Fiona', 'Chance', 'Norah', 'Paxton', 'Elliot', 'Emery', 'Fernando', 'Maci', 'Miranda', 'Keegan', 'Landen', 'Ximena', 'Amaya', 'Manuel', 'Amir', 'Shane', 'Cecilia', 'Raymond', 'Andre', 'Ana', 'Shelby', 'Katie', 'Hope', 'Callie', 'Jordan', 'Luna', 'Leilani', 'Eliza', 'Mckenna', 'Angel', 'Genevieve', 'Makenna', 'Isla', 'Lola', 'Danielle', 'Chelsea', 'Leila', 'Tessa', 'Adelyn', 'Camille', 'Mikayla', 'Adeline', 'Adalynn', 'Sienna', 'Esther', 'Jacqueline', 'Emerson', 'Arabella', 'Maggie', 'Athena', 'Lucia', 'Lexi', 'Ayla'];
var lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'McDonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver', 'Montgomery', 'Richards', 'Williamson', 'Johnston', 'Banks', 'Meyer', 'Bishop', 'McCoy', 'Howell', 'Alvarez', 'Morrison', 'Hansen', 'Fernandez', 'Garza', 'Harvey', 'Little', 'Burton', 'Stanley', 'Nguyen', 'George', 'Jacobs', 'Reid', 'Kim', 'Fuller', 'Lynch', 'Dean', 'Gilbert', 'Garrett', 'Romero', 'Welch', 'Larson', 'Frazier', 'Burke', 'Hanson', 'Day', 'Mendoza', 'Moreno', 'Bowman', 'Medina', 'Fowler', 'Brewer', 'Hoffman', 'Carlson', 'Silva', 'Pearson', 'Holland', 'Douglas', 'Fleming', 'Jensen', 'Vargas', 'Byrd', 'Davidson', 'Hopkins', 'May', 'Terry', 'Herrera', 'Wade', 'Soto', 'Walters', 'Curtis', 'Neal', 'Caldwell', 'Lowe', 'Jennings', 'Barnett', 'Graves', 'Jimenez', 'Horton', 'Shelton', 'Barrett', 'Obrien', 'Castro', 'Sutton', 'Gregory', 'McKinney', 'Lucas', 'Miles', 'Craig', 'Rodriquez', 'Chambers', 'Holt', 'Lambert', 'Fletcher', 'Watts', 'Bates', 'Hale', 'Rhodes', 'Pena', 'Beck', 'Newman', 'Haynes', 'McDaniel', 'Mendez', 'Bush', 'Vaughn', 'Parks', 'Dawson', 'Santiago', 'Norris', 'Hardy', 'Love', 'Steele', 'Curry', 'Powers', 'Schultz', 'Barker', 'Guzman', 'Page', 'Munoz', 'Ball', 'Keller', 'Chandler', 'Weber', 'Leonard', 'Walsh', 'Lyons', 'Ramsey', 'Wolfe', 'Schneider', 'Mullins', 'Benson', 'Sharp', 'Bowen', 'Daniel', 'Barber', 'Cummings', 'Hines', 'Baldwin', 'Griffith', 'Valdez', 'Hubbard', 'Salazar', 'Reeves', 'Warner', 'Stevenson', 'Burgess', 'Santos', 'Tate', 'Cross', 'Garner', 'Mann', 'Mack', 'Moss', 'Thornton', 'Dennis', 'McGee', 'Farmer', 'Delgado', 'Aguilar', 'Vega', 'Glover', 'Manning', 'Cohen', 'Harmon', 'Rodgers', 'Robbins', 'Newton', 'Todd', 'Blair', 'Higgins', 'Ingram', 'Reese', 'Cannon', 'Strickland', 'Townsend', 'Potter', 'Goodwin', 'Walton', 'Rowe', 'Hampton', 'Ortega', 'Patton', 'Swanson', 'Joseph', 'Francis', 'Goodman', 'Maldonado', 'Yates', 'Becker', 'Erickson', 'Hodges', 'Rios', 'Conner', 'Adkins', 'Webster', 'Norman', 'Malone', 'Hammond', 'Flowers', 'Cobb', 'Moody', 'Quinn', 'Blake', 'Maxwell', 'Pope', 'Floyd', 'Osborne', 'Paul', 'McCarthy', 'Guerrero', 'Lindsey', 'Estrada', 'Sandoval', 'Gibbs', 'Tyler', 'Gross', 'Fitzgerald', 'Stokes', 'Doyle', 'Sherman', 'Saunders', 'Wise', 'Colon', 'Gill', 'Alvarado', 'Greer', 'Padilla', 'Simon', 'Waters', 'Nunez', 'Ballard', 'Schwartz', 'McBride', 'Houston', 'Christensen', 'Klein', 'Pratt', 'Briggs', 'Parsons', 'McLaughlin', 'Zimmerman', 'French', 'Buchanan', 'Moran', 'Copeland', 'Roy', 'Pittman', 'Brady', 'McCormick', 'Holloway', 'Brock', 'Poole', 'Frank', 'Logan', 'Owen', 'Bass', 'Marsh', 'Drake', 'Wong', 'Jefferson', 'Park', 'Morton', 'Abbott', 'Sparks', 'Patrick', 'Norton', 'Huff', 'Clayton', 'Massey', 'Lloyd', 'Figueroa', 'Carson', 'Bowers', 'Roberson', 'Barton', 'Tran', 'Lamb', 'Harrington', 'Casey', 'Boone', 'Cortez', 'Clarke', 'Mathis', 'Singleton', 'Wilkins', 'Cain', 'Bryan', 'Underwood', 'Hogan', 'McKenzie', 'Collier', 'Luna', 'Phelps', 'McGuire', 'Allison', 'Bridges', 'Wilkerson', 'Nash', 'Summers', 'Atkins'];
var levels = ["Beginner", "Intermediate", "Advanced"];

function randomPick(a) {
	var r = (Math.random())*(a.length);
	return a[Math.floor(r)];
}

function getRandomName() {
	return randomPick(firstNames) + " " + randomPick(lastNames);
}

function getRandomLevel() {
	return randomPick(levels);
}

function getRandomImageUrl(x, y) {
	var r = Math.random();
	return "http://lorempixel.com/" + x + "/" + y + "/people/?dummy=" + r.toString();
}

var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getRandomWord() {
	var numCharacters = getRandomNumber(3, 7);
	var word = randomPick(alphabets);
	for (var i = 0; i < numCharacters - 1; i++) {
		word += randomPick(alphabets);
	}
	return word;
}


function capitalize(s) {
	return s[0].toUpperCase() + s.substr(1);
}

function getRandomSentence(minLength, maxLength, toCapitalize) {
	var numWords = getRandomNumber(minLength, maxLength);
	var sentence = getRandomWord();
	for (var i = 0; i < numWords-1; i++) {
		sentence += " " + getRandomWord();
	}
	sentence += ".";
	toCapitalize = (typeof toCapitalize == "undefined")?true:toCapitalize;
	return toCapitalize?capitalize(sentence):sentence;
}

function getRandomTitle() {
	return getRandomSentence(5,10);
}

function getRandomDescription() {
	var numSentences = getRandomNumber(2,5);
	var description = getRandomSentence(7, 10);
	for (var i = 0; i < numSentences - 1; i++) {
		description += " " + getRandomSentence(7,10);
	}
	return description;
}

/*
	-- JSON format for project entry -- 
	{
		"title" :
		"description" :
		"creator" : {
			"avatar_url": "",
			"name": ""
		},
		"contributors" : [
			{
				"avatar_url": "",
				"name": ""
			}, 
			{

			}
		],
		"level": "",
		"upvotes": "",
		"downvotes": ""
	}
*/
function getRandomProjectEntries(numEntries) {
	var projectEntries = [];
	for (var i = 0; i < numEntries; i++) {
		projectEntries[i] = {};
		
		projectEntries[i].title = getRandomTitle();
		projectEntries[i].description = getRandomDescription();
		projectEntries[i].creator = {};
		projectEntries[i].creator.avatar_url = getRandomImageUrl(120, 120);
		projectEntries[i].creator.name = getRandomName();

		projectEntries[i].contributors = [];
		var randomNumContributors = getRandomNumber(1, 10);
		for (var j = 0; j < randomNumContributors; j++) {
			projectEntries[i].contributors[j] = {};
			projectEntries[i].contributors[j].avatar_url = getRandomImageUrl(40, 40);
			projectEntries[i].contributors[j].name = getRandomName();
		}

		projectEntries[i].level = getRandomLevel();
		projectEntries[i].upvotes = getRandomNumber(0, 50);
		projectEntries[i].downvotes = getRandomNumber(0, 50);
	}
	return projectEntries;
}

module.exports = {
	getRandomProjectEntries: getRandomProjectEntries
}
