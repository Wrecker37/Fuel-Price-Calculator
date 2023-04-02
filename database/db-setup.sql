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
    FirstName varchar(64) NOT NULL, 
    LastName varchar(64) NOT NULL,
    Email varchar(64) NOT NULL,
    isExistingCustomer bool,
    FOREIGN KEY (UserID) REFERENCES User(userID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Quote`(
	QuoteID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    UserID int NOT NULL,
    DateRequested DateTime(6) NOT NUll,
    GallonsRequested float DEFAULT 0,
    ProfitMarginPercent float DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Address`(
	AddressID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ProfileID INT NOT NULL,
	Address varchar(64) NOT NULL,
    City varchar(64) NOT NULL,
    State varchar(64) NOT NULL,
    Country varchar(64) NOT NULL,
    ZipCode varchar(64) NOT NULL,
    FOREIGN KEY (ProfileID) REFERENCES Profile(ProfileID) ON DELETE CASCADE
) ENGINE=INNODB;

SELECT * FROM User;
SELECT * FROM Profile;