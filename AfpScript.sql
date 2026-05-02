select * from employee e;

select id,last_name,first_name from employee e;

select * from employee e where last_name='tanjuan' and email='vassili.';

insert into employee (email, department_id, last_name, first_name, birthday, date_hired,  created_date)
values ('juan23kmail.com', 3, 'dummy','ad','2006-05-02', '2026-05-02','2026-05-02');

update employee set email='vassili.tanjuan@gmail.com' where id=7;

update employee set salary=500 where department_id=1;

select * from employee where department_id=1;

select id,last_name,first_name from employee where department_id=1;

delete from employee where id=2;

select e.id, e.email, e.last_name, e.first_name,d.code,d.name from employee e
	inner join department d 
		on e.department_id = d.id
		
where d.code= 'it'

select e.id,e.last_name ,e.first_name, d.code,p.code ,p.date_started
from employee e
	inner join employee_project ep 
		on e.id = ep.employee_id 
	inner join project p 
		on p.id = ep.project_id 
	inner join department d 
		on d.id = e.department_id 