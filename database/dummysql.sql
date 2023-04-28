DROP DATABASE FUELCALCULATOR;

CREATE DATABASE FUELCALCULATOR;

USE FUELCALCULATOR;

CREATE TABLE `User` ( 
    userID INT auto_increment NOT NULL PRIMARY KEY, 
    username varchar(64) UNIQUE NOT NULL,
    passwordHash varchar(255) NOT NULL
) ENGINE=INNODB;

CREATE TABLE `Profile` (
	ProfileID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    FirstName varchar(64), 
    LastName varchar(64),
    FOREIGN KEY (UserID) REFERENCES User(userID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Quote`(
	QuoteID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    UserID int NOT NULL,
    DateRequested varchar(64) NOT NUll,
    GallonsRequested float DEFAULT 0,
    Price float,
    Total float,    
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Address`(
	AddressID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ProfileID INT NOT NULL,
	Address varchar(64),
    City varchar(64),
    State varchar(64),
    Country varchar(64),
    ZipCode varchar(64),
    FOREIGN KEY (ProfileID) REFERENCES Profile(ProfileID) ON DELETE CASCADE
) ENGINE=INNODB;

SELECT * FROM User;

INSERT INTO User (username, passwordHash) VALUES ('Jane', '$2a$10$rDYJVO7eGzN7kD9RCERbROYY5jmmabeVuzzYXrXlM4mWVYnyKBWRa');
INSERT INTO User (username, passwordHash) VALUES ('Joe', 'password');

INSERT INTO Quote (UserID, DateRequested, GallonsRequested, Price, Total) VALUES
(1, 1, 3.5, 6, 9);

INSERT INTO Quote (UserID, DateRequested, GallonsRequested, Price, Total) VALUES
(1, 1, 3435, 6, 9);

INSERT INTO Profile (UserID, FirstName, LastName) VALUES
(1, 'Anil', 'Shanker');



INSERT INTO Address (ProfileID, Address, City, State, COuntry, ZipCode) VALUES
(1, 'address', 'Houston', 'TX', 'USA', 'zipcode');

SELECT * FROM Quote;
SELECT * FROM Address;
SELECT * FROM User;
SELECT * FROM Profile; 
SELECT * FROM Address;


UPDATE address SET address = 'address1246', city = 'London', state = 'NY', zipcode = '33343' WHERE profileID = (SELECT profileID FROM profile WHERE userID = 1);

INSERT INTO User (username, passwordHash) VALUES
('courtney', '$2a$10$UvTclDmF5IBNNQtlIX4Q/ePVISc7sWm5m0K/2As97rx8sRWdE8OaW');

INSERT INTO Profile (UserID, FirstName, LastName) VALUES
(3, 'Courtney', 'Nguyen');

INSERT INTO Address (ProfileID, Address, City, State, Country, ZipCode) VALUES
(2, '4130 Heart St', 'Chicago', 'IL', 'USA', '777777');

INSERT INTO Quote (UserID, DateRequested, GallonsRequested) VALUES
(3, '2023-04-01 10:00:00', 100);
