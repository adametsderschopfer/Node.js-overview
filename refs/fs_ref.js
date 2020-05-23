// File system
const fs = require("fs");
// Path
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw err
//   else console.log("Folder was be created");
// });

// fs.writeFile(path.join(__dirname, "notes", "pidor.txt"), "TI PIDOR", (err) => {
//   if (err) throw err;
//   console.log("File was be created");

//   fs.appendFile(
//     path.join(__dirname, "notes", "pidor.txt"),
//     " || -teperi ti  ne pidor ",
//     (err) => {
//       if (err) throw err;
//       console.log("File was be edited");

//       fs.readFile(
//         path.join(__dirname, "notes", "pidor.txt"),
//         // this is a second option, where we use a decode for read file (utf-8)
//         'utf-8',
//         (err, data) => {
//           if (err) throw err;
//           // this is a first option console.log(Buffer.from(data).toString())
//           console.log(data)
//         }
//       )

//     }
//   );
// });

// fs.readFile(
//   path.join(__dirname, "notes", "pidor.txt"),
//   // this is a second option, where we use a decode for read file (utf-8)
//   'utf-8',
//   (err, data) => {
//     if (err) throw err;
//     // this is a first option console.log(Buffer.from(data).toString())
//     console.log(data)
//   }
// )

// fs.rename(
//   path.join(__dirname, "notes", "pidor.txt"),
//   path.join(__dirname, "notes", "pidorZnovimNazvaniem.txt"),
//   (e) => {
//     if (e) throw e;
//     console.log("file was be renamed");
//   }
// );
