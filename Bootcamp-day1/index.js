// require the fs module
const fs=require('fs');
console.log(new Date().toLocaleDateString()," fs module imported");

// Create a file named students.txt and write the names of 5 students (one per line)
const filename='student.txt'; // filename
const studentNames='Surya Kumar Gouda\n Elliot Alderson\n Ryan Dahl\n Kevin Mitnick\n Robert Downey Jr.\n'; //student data
console.log(new Date().toLocaleDateString(),'file writing .....');
fs.writeFileSync(filename,studentNames,{encoding:'utf-8'}); //writeFileSync used to write data into file synchnous mode  
console.log(new Date().toLocaleDateString(),'file written sucessfully');

// Read the file and display all student names in the console
console.log(new Date().toLocaleDateString(),'file reading.......');
const dataFromStudentFIle=fs.readFileSync(filename,{encoding:'utf-8'}); //readFileSync used to read data from file synchnous mode 
console.log(new Date().toLocaleDateString(),'file read sucessfully');
console.log('students name are: \n',dataFromStudentFIle);

// Append a new student name to the existing file
console.log(new Date().toLocaleDateString(),'data appending.......');
fs.appendFileSync(filename,' Sankar Gouda',{encoding:'utf-8'}); //appendFileSync used to append data in a exist file synchnous mode
console.log(new Date().toLocaleDateString(),'data append sucessfully');

//  Create a new folder called data and move the students.txt file into it
fs.mkdirSync('Data', { recursive: true }); //mkdirSync used to create a folder synchnous mode
console.log(new Date().toLocaleDateString(),'Data folder created sucessfully');
fs.renameSync('student.txt', 'data/student.txt'); //renameSync used to move file one folder to another folder synchnous mode
console.log(new Date().toLocaleDateString(),'student.txt sucessfully moved to Data folder');

// Delete the students.txt file from the data folder
console.log(new Date().toLocaleDateString(),'student.txt deleting .... from Data folder');
fs.unlinkSync('data/student.txt'); //unlinkSync used to delete file synchnous mode
console.log(new Date().toLocaleDateString(),'student.txt deleted sucessfully from Data folder');