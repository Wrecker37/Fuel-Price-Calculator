DROP DATABASE FUELCALCULATOR;

CREATE DATABASE FUELCALCULATOR;

USE FUELCALCULATOR;

CREATE TABLE `User` ( 
    userID INT auto_increment NOT NULL PRIMARY KEY, 
    username varchar(64) NOT NULL,
    passwordHash varchar(255) NOT NULL
) ENGINE=INNODB;

CREATE TABLE `Profile` (
	ProfileID varchar(64) NOT NULL PRIMARY KEY,
    UserID INT NOT NULL,
    FirstName varchar(64) NOT NULL, 
    LastName varchar(64) NOT NULL,
    Email varchar(64) NOT NULL,
    isExistingCustomer bool,
    FOREIGN KEY (UserID) REFERENCES User(userID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Quote`(
	QuoteID varchar(64) NOT NULL PRIMARY KEY,
    UserID INT NOT NULL,
    DateRequested DateTime(6) NOT NUll,
    GallonsRequested float DEFAULT 0,
    ProfitMarginPercent float DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE `Address`(
	AddressID varchar(64) NOT NULL PRIMARY KEY,
    ProfileID varchar(64) NOT NULL,
	Address varchar(64) NOT NULL,
    City varchar(64) NOT NULL,
    State varchar(64) NOT NULL,
    Country varchar(64) NOT NULL,
    ZipCode varchar(64) NOT NULL,
    FOREIGN KEY (ProfileID) REFERENCES Profile(ProfileID) ON DELETE CASCADE
) ENGINE=INNODB;

SELECT * FROM User