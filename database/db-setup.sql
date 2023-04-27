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
    Email varchar(64),
    isExistingCustomer bool,
    FOREIGN KEY (UserID) REFERENCES User(userID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Quote`(
	QuoteID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    UserID int NOT NULL,
    DateRequested varchar(64) NOT NUll,
    GallonsRequested float DEFAULT 0,
    ProfitMarginPercent float DEFAULT 0,
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