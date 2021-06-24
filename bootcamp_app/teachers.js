const { pool } = require('./database-connection');


const myArgs = process.argv.slice(2);

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${myArgs[0]}'
ORDER BY teachers.name`)
  .then(res => {
    res.rows.forEach(user =>{
      console.log(user);
    });
  });