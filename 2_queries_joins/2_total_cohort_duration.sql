SELECT sum(duration) as total_duration
FROM assignment_submissions 
JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = students.cohort_id
Where cohorts.name = 'FEB12' 