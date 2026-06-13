select * from employee e;

select id,last_name,first_name from employee e;

select * from employee e 
	where last_name='Asino' and email='rob@gmail.com';

select id,last_name,first_name,salary from employee where department_id = 1;
	
insert into employee (email, department_id, last_name, first_name, birthday, date_hired, created_date)
values ('juana2@gmail.com', 3, 'Dummy', 'Juana', '1993-05-02', '2026-05-02', '2026-05-02');

update employee set salary=500 where department_id=1;

delete from employee where id=11;

truncate table employee;

drop table employee;

drop database afp;

select e.id,e.email,e.last_name,e.first_name,d.code,d.name from employee e
	inner join department d
		on e.department_id = d.id
where d.code = 'it'

select e.id,e.last_name,e.first_name,d.code,p.code,p.date_started 
from employee e 
	inner join employee_project ep
		on e.id = ep.employee_id 
	inner join project p 
		on p.id = ep.project_id 
	inner join department d 
		on e.department_id = d.id 
		
select e.*, ep.project_id from employee e 
	inner join employee_project ep 