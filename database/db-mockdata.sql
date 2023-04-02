
#In order passwords should be '123', '234', '345', '456', '567'
INSERT INTO `User` (username, passwordHash) VALUES
('John', '$2a$10$VCMKeqXyvB8Uf7x4tzWsc.t86oe0uqr5EL84SimfDZXaAFuLOb78.'),
('Jane', '$2a$10$uZxwdOVJTanvfBFAkruX/.lbzwhE5KO4z2xKj7PZJ01rm2XPCfOMu'),
('Alice', '$2a$10$TnFSWikOMBaLEmFzPvSoe.pw21VJIZ7Imp2KOsxSYQO7y/qQF82Xa'),
('Bob', '$2a$10$Tuxh3wDs24ZY5cCZiq8LL.owjPsMjrqnLzM/B7QeXZYE5vuXhR7gG'),
('Charlie', '$2a$10$81G98p3NqGaMGOa4K...JeZMungvdECyuqQUb2r.FuYtHBqnjeUxK');

INSERT INTO `Profile` (UserID, FirstName, LastName, Email, isExistingCustomer) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', TRUE),
(2, 'Jane', 'Smith', 'jane.smith@example.com', FALSE),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', TRUE),
(4, 'Bob', 'Williams', 'bob.williams@example.com', FALSE),
(5, 'Charlie', 'Brown', 'charlie.brown@example.com', TRUE);

INSERT INTO `Address` (ProfileID, Address, City, State, Country, ZipCode) VALUES
(1, '123 Main St', 'Houston', 'TX', 'USA', '77001'),
(2, '456 Oak St', 'Austin', 'TX', 'USA', '78701'),
(3, '789 Pine St', 'Dallas', 'TX', 'USA', '75201'),
(4, '246 Elm St', 'San Antonio', 'TX', 'USA', '78201'),
(5, '135 Cedar St', 'Fort Worth', 'TX', 'USA', '76101');

INSERT INTO `Quote` (UserID, DateRequested, GallonsRequested, ProfitMarginPercent) VALUES
(1, '2023-04-01 10:00:00', 100, 10),
(1, '2023-04-02 14:00:00', 150, 12),
(2, '2023-04-03 09:30:00', 200, 8),
(3, '2023-04-04 15:45:00', 250, 15),
(3, '2023-04-05 11:00:00', 300, 10),
(3, '2023-04-06 16:30:00', 350, 12),
(4, '2023-04-07 10:15:00', 400, 7),
(5, '2023-04-08 12:00:00', 450, 14),
(5, '2023-04-09 13:30:00', 500, 9);