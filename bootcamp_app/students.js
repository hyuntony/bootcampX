const { pool } = require('./database-connection');

const myArgs = process.argv.slice(2);
const firstVar = myArgs[0];
const secondVar = myArgs[1];
const values = [`%${firstVar}%`, secondVar];
pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name lIKE $1
LIMIT $2;
`, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(e => console.error('query error', e.stack));