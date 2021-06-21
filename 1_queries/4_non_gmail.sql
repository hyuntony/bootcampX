SELECT name, email, id, cohort_id
FROM students
where email NOT LIKE '%gmail%'
AND phone IS NULL