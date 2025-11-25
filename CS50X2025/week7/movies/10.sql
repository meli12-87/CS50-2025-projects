SELECT name FROM people
WHERE id IN ( SELECT DISTINCT id from directors, ratings WHERE
 people.id = directors.person_id
AND ratings.movie_id = directors.movie_id
AND rating >= 9.0);
