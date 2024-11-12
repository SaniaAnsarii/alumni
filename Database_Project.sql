-- Creating database
Drop database if exists AlumniAssociatePlatform;
CREATE DATABASE AlumniAssociatePlatform;
USE AlumniAssociatePlatform;

-- 1. Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    user_type ENUM('alumni', 'student', 'admin') NOT NULL,
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Departments Table
CREATE TABLE Departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) UNIQUE NOT NULL
);
-- 2. AlumniDetails Table
CREATE TABLE AlumniDetails (
    alumni_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    graduation_year YEAR,
    degree VARCHAR(100),
    department_id INT,
    current_position VARCHAR(100),
    company_name VARCHAR(100),
    location VARCHAR(100),
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id) ON DELETE SET NULL
);


-- 4. Events Table
CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    location VARCHAR(100),
    description TEXT,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 5. Jobs Table
CREATE TABLE Jobs (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    company_name VARCHAR(100),
    location VARCHAR(100),
    job_type ENUM('full-time', 'part-time', 'internship', 'contract') NOT NULL,
    description TEXT,
    posted_by INT,
    posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (posted_by) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 6. Messages Table (for communication between alumni and students/admins)
CREATE TABLE Messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message_content TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- 7. AlumniAssociations Table
CREATE TABLE AlumniAssociations (
    association_id INT PRIMARY KEY AUTO_INCREMENT,
    association_name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. AlumniAssociations_Members Table (Alumni joining associations)
CREATE TABLE AlumniAssociations_Members (
    association_id INT,
    alumni_id INT,
    joined_date DATE,
    PRIMARY KEY (association_id, alumni_id),
    FOREIGN KEY (association_id) REFERENCES AlumniAssociations(association_id) ON DELETE CASCADE,
    FOREIGN KEY (alumni_id) REFERENCES AlumniDetails(alumni_id) ON DELETE CASCADE
);

-- 9. EventRegistrations Table (Alumni registering for events)
CREATE TABLE EventRegistrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    user_id INT,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- 10. JobApplications Table (Alumni applying for jobs)
CREATE TABLE JobApplications (
    application_id INT PRIMARY KEY AUTO_INCREMENT,
    job_id INT,
    user_id INT,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resume_link VARCHAR(255),
    status ENUM('applied', 'under review', 'accepted', 'rejected') DEFAULT 'applied',
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
