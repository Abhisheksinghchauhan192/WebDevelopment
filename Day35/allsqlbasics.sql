use classicmodels;

# learnign about the select query  

select lastName from employees;
select firstName,lastName from employees;

select 
	firstName,
    lastName,
    jobtitle
from employees;

select * from employees;

select 1+1;
select now();
select concat("Abhi",' ',"Chauhan");
select concat("Abhisehk"," ","Chauhan") as Name;

# order by clause.. 
SELECT 
  contactLastname, 
  contactFirstname 
FROM 
  customers 
ORDER BY 
  contactLastname;
  
  
SELECT 
  contactLastname, 
  contactFirstname 
FROM 
  customers 
ORDER BY 
  contactLastname desc,
  contactFirstname asc;
  
  
select 
	orderNumber,
    orderlinenumber,
    quantityOrdered * priceEach as totalAmount
from 
	orderdetails
order by 
	totalAmount desc;

# field function to order base on list 
SELECT 
  orderNumber, 
  status 
FROM 
  orders 
ORDER BY 
  FIELD(
    status, 
    'In Process', 
    'On Hold', 
    'Cancelled', 
    'Resolved', 
    'Disputed', 
    'Shipped'
  );
 
 select * from employees;
select 
	lastName,
    firstName,
    jobTitle
from
	employees
where 
	jobTitle = 'Sales Rep';
    

-- The following example uses the WHERE clause to find employees whose job titles are Sales Rep and office codes are 1:

SELECT 
	lastName,
    firstName,
    jobTitle
FROM
	employees
WHERE 
	jobTitle ='Sales Rep' AND officeCode = 1;
	
  
SELECT 
	lastName,
    firstName,
    jobTitle
FROM
	employees
WHERE 
	jobTitle ='Sales Rep' OR officeCode = 1;
    
    SELECT 
	lastName,
    firstName,
    jobTitle,
    officeCode
FROM
	employees
WHERE 
	officeCode BETWEEN 1 AND 3
ORDER BY
	officeCode;
    
SELECT
	firstName,
    lastName
FROM
	employees
WHERE
	lastName LIKE '%son'
ORDER BY
	firstName;
    

SELECT 
	lastName,
    firstName,
    jobTitle,
    officeCode
FROM
	employees
WHERE 
	officeCode IN (1,2,3)
ORDER BY
	officeCode;
    
SELECT 
	firstName,
    lastName,
    reportsTo
FROM 
	employees
WHERE 
	reportsTo IS NULL;
    

SELECT 
	firstName,
    lastName,
    jobTitle
FROM
	employees
WHERE 
	jobTitle <> 'Sales Rep'; # this is not equal to oprerator can also use != 
	

SELECT 
	DISTINCT lastName
FROM 
	employees;
    
SELECT DISTINCT
	state,
    city
from
	customers
where 
	state is not null
order by
	state,
    city;
    
select 1 and 1; # true 1 
select 1 and 0; # false 0 

select 1 and null; # null otherwise.. 
select 0 and null; # 0 cause after evaluating first operand as 0 second is not evaluated
select null and 0; # also 0 


select 
	customername,
    country,
    state
from 
	customers
where 
	country = 'USA' and 
    state = 'CA';

select 
	customername,
    country,
    state,
    creditlimit
from 
	customers
where 
	country = 'USA' and 
    state = 'CA' and 
    creditlimit >100000;

# or operator 

select 1 or 0;
select 0 or null; # null 
select null or null; # null
select 1 or null; # 1  NOTE: 1 value is not null 

# operator precedence 
select 1 or 0 and 0; # give 1 cause and is higher in precednece than the or operator.

select 
	customername,
    country
from 
	customers
where 
	country = 'USA' or 
	country = 'France';


select 
	customername,
    country,
    creditlimit
from 
	customers
where 
	(country = 'USA' or 
	country = 'France') 
    and 
    creditlimit >100000; # NOTE: if parantheses are not used then result will be something else casue and evaluates first then

# in operator

select 1 in (14,5,4,1);
select 6 in (14,5,4,1);
select 1 in (4,5,5,null); # NOTE : left side is null or if not matched with any and list contain null then null is return otherwiese 0 

select  * from offices;
select 
	officeCode,
    city,
    phone,
    country
from 
	offices
where 
	country in ('USA','France');

# not in operator just gives the opposite values of in operator. 
select 
	officeCode,
    city,
    phone,
    country
from 
	offices
where 
	country not in ('USA','France');

select * from products;

select 
	productName,
    productCode,
    buyPrice
from 
	products
where 
	buyPrice between 90 and 100;

# following is also same as above .. 
select 
	productName,
    productCode,
    buyPrice
from 
	products
where 
	buyPrice >=90 and buyPrice <=100;

# using between with date 

select 
	orderNumber,
    requiredDate,
    status
from 
	orders
where
	
    requiredDate BETWEEN 
    cast('2003-01-01' as date) and 
    cast('2003-01-31' as date);

# Like operator in mysql

select 
	employeeNumber,
    lastName,
    firstName
from 
	employees
where
	firstName like 'a%';

# NOTE : pattern in not case sensitive b% and B% is same.. 
SELECT 
    employeeNumber, 
    lastName, 
    firstName
FROM
    employees
WHERE
    lastname LIKE '%on%'; # this check the substring on in lastName

# escape charector in like what if you want to search _20 then we use escape char as follow 

select 
	productCode,
    productName
from 
	products
where
	productcode like '%\_20%';
# or 
select 
	productCode,
    productName
from 
	products
where
	productcode like '%$_20%' escape '$'; # explictly telling the escape char for patter; 

# limit clause it accept two args offset and no of rows to return defaul offset it  0 

select 
	customerNumber,
    customerName,
    creditLimit
from 
	customers
ORDER BY
	creditlimit desc
limit 5;

select 
	customerNumber,
    customerName,
    creditLimit
from 
	customers
ORDER BY
	creditlimit asc,
    customerNumber
limit 5;

# find the customer who has 2nd highest credit limit
select 
	customerNumber,
    customerName,
    creditLimit
from 
	customers
order by 
	creditlimit desc
limit 1,1;
    
# distinct with limit mysql immediately stops searchingg when it found the results for limit. 
select 
	DISTINCT
    state
from
	customers
where 
	state is not null
limit 5;

# is null operator. to test a value is null or not. 
select 1 is null,0 is null,null is null; # 0 0 1
select 1 is not null,0 is not null , null is not null; # 1 1 0

# The following query uses the IS NULL operator to find customers who do not have a sales representative:

select 
	customerName,
    country,
    salesrepemployeenumber
from
	customers
where 
	salesrepemployeenumber is null
order by 
	customerName;

# aliases in mysql

SELECT 
    CONCAT_WS(' ', firstName, lastName) AS 'Full Name'
FROM
    employees;
# you can use the alias in orderby groupby and having clause ***NO WHERE .
select 
	concat_ws(' ',firstName,lastName) as `Full Name`
from
	employees
order by 
	`Full Name` desc;

select 
	orderNumber `Order No.`,
    sum(priceEach*quantityOrdered) Total
from 
	orderdetails
group by 
	`Order No.`
having 
		Total > 60000;
# table alias 

select 
	e.firstName,
    e.lastName
from 
	employees e
order by 
	e.firstName;

select 
	customerName,
    count(o.orderNumber) TotalOrder
from 
	customers c 
inner join 
	orders o
on 
	c.customerNumber = o.customerNumber
group by 
	customerName
order by 
	TotalOrder desc;

select 
	productCode,
    productName,
    textDescription
from
	products t1
inner join
	productlines t2
on 
	t1.productLine = t2.productLine;

# can use using cause the joining column name is same on both tables.
SELECT 
    productCode, 
    productName, 
    textDescription
FROM
    products
INNER JOIN productlines USING (productline);
	
select
	t1.orderNumber,
    t1.status,
    sum(quantityOrdered* priceEach) TotalCost
from
	orders t1 
inner join
	orderdetails t2  on t1.orderNumber = t2.orderNumber
group by 
	t1.orderNumber;
    
# joining 3 tables using inner joins 

SELECT 
    orderNumber,
    orderDate,
    orderLineNumber,
    productName,
    quantityOrdered,
    priceEach
from
	orders
inner join orderdetails using(orderNumber)
inner join products	using (productCode)
ORDER BY
	orderNumber,
    orderLineNumber;
    
# 4 table inner join 

SELECT 
    orderNumber,
    orderDate,
    customerName,
    orderLineNumber,
    productName,
    quantityOrdered,
    priceEach
FROM
    orders
INNER JOIN orderdetails 
    USING (orderNumber)
INNER JOIN products 
    USING (productCode)
INNER JOIN customers 
    USING (customerNumber)
ORDER BY 
    orderNumber, 
    orderLineNumber;

# using other operators to form the join condition 

select 
	orderNumber,
    productName,
    msrp,
    priceEach
from 
	products p
inner join 
	orderdetails o on
    p.productcode = o.productcode and p.msrp > o.priceEach
where
	    p.productcode = 'S10_1678';

# left join 
# slecting all the customer with their records..
select 
	c.customerNumber,
    customerName,
    orderNumber,
    status
from
	customers c 
left join orders o on 
	c.customerNumber = o.customerNumber;
        
# find out customer who didn't have any orders 

select 
	customerNumber,
    customerName,
    orderNumber,
    status
from
	customers
left join 
	orders using (customerNumber)
where
	orderNumber is null;
    
# joining three table with left join

select 
	lastName,
    firstName,
    customerName,
    checkNumber,
    amount
from
	employees
left join customers c on
	employeeNumber = 	salesRepEmployeeNumber
left join payments p on
	p.customerNumber = c.customerNumber
order by
	customerName,
    checkNumber;

# find the employees who are not in charge of any customer

select
	employeeNumber,
    concat_ws(' ',firstName,lastName) FullName,
    customerNumber
from
	customers 
right join employees on 
	employeeNumber = salesRepEmployeeNumber
where
	customerNumber is null
order by
	employeeNumber;
    
# self join 
# get the managers or all the employees. 

select 
	concat_ws(' ',m.firstName,m.lastName) as Manager,
    concat_ws(' ',e.firstName,e.lastName) as `direct report `
from 
	employees as e
inner join employees as m on 
	e.employeeNumber = m.reportsTo
order by
	Manager;
    
# self join using left join to enclude all the emplyees 
SELECT 
    IFNULL(CONCAT(m.lastname, ', ', m.firstname),
            'Top Manager') AS 'Manager',
    CONCAT(e.lastname, ', ', e.firstname) AS 'Direct report'
FROM
    employees e
LEFT JOIN employees m ON 
    m.employeeNumber = e.reportsto
ORDER BY 
    manager DESC;

use myexpenses;

select * from expenses;
select 
	Category,
    sum(Amount) as Total
from 
	expenses
group by
	Category
ORDER BY
	Total desc;

use classicmodels;

select 
	status
from 
	orders
group by
	status;
    
select 
	status ,
	count(*) as TotalInEachGroup
from
	orders
group by
	status;
    
# get the amount of each group using join and group by together 

select 
	status,
    sum(quantityOrdered * priceEach) as TotalAmount
from 
	orders
inner join orderdetails using(orderNumber)
group by 
	status;

select 
	orderNumber,
    sum(quantityOrdered*priceEach) as Total
from 
	orderdetails
group by
	orderNumber;

# using group by with expressions 
# following is to calculate the total sales for each year. 

select 
	year(orderDate) as Year,
    sum(quantityOrdered*priceEach) as Total
from 
	orders
    inner join orderdetails using(orderNumber)
where
	status = 'Shipped'
group by
	year(orderDate);
    
# using having clause in group by to filter out to a expression

select 
	year(orderDate) as Year,
    sum(quantityOrdered*priceEach) as Total
from 
	orders
    inner join orderdetails using(orderNumber)
where
	status = 'Shipped'
group by
	year(orderDate)
having 
	Year > 2003;

# grouping multiple coluns 
# give the total amount of status of sales per year 

select
	year(orderDate) as Year,
    status,
    sum(quantityOrdered*priceEach) as Total
from 
	orders
    inner join orderdetails using (orderNumber)
group by
	Year,
    status
order by
	Year;
    
# having clause 
select 
	orderNumber,
    sum(quantityOrdered) itemCounts,
    sum(quantityOrdered*priceEach) as Total
from
	orderdetails
group by 
	orderNumber
having
	 itemCounts >600 and
	Total >1000;

SELECT 
    a.ordernumber, 
    status, 
    SUM(priceeach*quantityOrdered) total
FROM
    orderdetails  a
INNER JOIN orders  b
    ON a.ordernumber = b.ordernumber
GROUP BY  
    ordernumber, 
    status
HAVING 
    status = 'Shipped' AND 
    total > 1500;

SELECT 
  customerName, 
  COUNT(*) order_count 
FROM 
  orders 
  INNER JOIN customers using (customerNumber) 
GROUP BY 
  customerName 
HAVING 
  order_count > 4 
ORDER BY 
  order_count;
  
CREATE TABLE sales
SELECT
    productLine,
    YEAR(orderDate) orderYear,
    SUM(quantityOrdered * priceEach) orderValue
FROM
    orderdetails
        INNER JOIN
    orders USING (orderNumber)
        INNER JOIN
    products USING (productCode)
GROUP BY
    productLine ,
    YEAR(orderDate);

select * from sales;

# ROLLUP ... 

SELECT 
    productline, 
    SUM(orderValue) totalOrderValue
FROM
    sales
GROUP BY 
    productline;

SELECT 
    productline, 
    SUM(orderValue) totalOrderValue
FROM
    sales
GROUP BY 
    productline 
UNION ALL
SELECT 
    NULL, 
    SUM(orderValue) totalOrderValue
FROM
    sales;
    
select 
	productLine,
    sum(orderValue) as TotalOrders
from 
	sales
group by
	productline with rollup;

# when two columns in group by 
# the (c1,c2),(c1) ,() grouping sets are assumed by rollup
SELECT 
    productLine, 
    orderYear,
    SUM(orderValue) totalOrderValue
FROM
    sales
GROUP BY 
	productline,
    orderYear
WITH ROLLUP;

# if the heirarchy is reversed the rollup generate the profit per year when year change and a grando total in last

select 
	ProductLine,
    orderYear,
    sum(orderValue) as totalOrderValue
from
	sales
group by 
	orderYear,
    productline
with rollup;
    
# the grouping function return 1 and 0 based on the value in the column in super aggregated function i null or not
SELECT 
    orderYear,
    productLine, 
    SUM(orderValue) totalOrderValue,
    GROUPING(orderYear),
    GROUPING(productLine)
FROM
    sales
GROUP BY 
    orderYear,
    productline
WITH ROLLUP;

# we can combine it with if condition to assing meaningful names to the null value

select
	if(grouping(orderYear),
		'All Years',orderYear) orderYear,
	if(grouping(productLine),
		'All Product Line',productLine) productLine,
	sum(orderValue) totalOrderValue
from 
	sales
group by
	productLine,
    orderYear
with rollup;

select
	
	if(grouping(productLine),
		'All Product Line',productLine) productLine,
	if(grouping(orderYear),
		'All Years',orderYear) orderYear,
	sum(orderValue) totalOrderValue
from 
	sales
group by
    orderYear,
    productLine
with rollup;

# Subqueries
select 
	firstName,
    lastName
from 
	employees
where 
	officeCode in (
		select 
			officeCode
		from 
			offices
		where 
			country = "USA"
            );

# get the customers whose payment amount is greater than the avarage

select 
	c.customerNumber,
    customerName,
    checkNumber,
    amount
from 
	customers c
inner join payments p on
	c.customerNumber = p.customerNumber
where 
	amount > (
			select 
				avg(amount)
			from 
				payments
			);
            
# find out the customer who had not made any order 

select 
	customerName
from
	customers
where 
	customerNumber not in (
		select distinct
			customerNumber
		from 
			orders);
            
# subquery in from clause

select 
		max(items),
        min(items),
        avg(items)
from
	(select
		orderNumber,
        count(orderNumber) as items
	from
		orderdetails
	group by
		orderNumber
	) as itemperOrder; # every derived table must have a alias
    

SELECT 
    productname, buyprice
FROM
    products p1
WHERE
    buyprice > (SELECT 
            AVG(buyprice)
        FROM
            products
        WHERE
            p1.productline = productline);

# same as above but using joins.. and derived table concept.
SELECT
    p.productname,
    p.buyprice
FROM
    products p
INNER JOIN
    (SELECT
        productline,
        AVG(buyprice) AS avg_line_price
    FROM
        products
    GROUP BY
        productline
    ) AS avg_prices ON p.productline = avg_prices.productline
WHERE
    p.buyprice > avg_prices.avg_line_price;
    
#Concept of derived table make customer groups as platinum gold and silver 

SELECT 
    customerGroups, COUNT(cg.customergroups) AS groupCount
FROM
    (SELECT 
        customerNumber,
            SUM(priceEach * quantityOrdered) AS sales,
            (CASE
                WHEN SUM(priceEach * quantityOrdered) < 10000 THEN 'Silver'
                WHEN SUM(priceEach * quantityOrdered) BETWEEN 10000 AND 100000 THEN 'Gold'
                WHEN SUM(priceEach * quantityOrdered) > 100000 THEN 'Platinum'
            END) AS customerGroups
    FROM
        orderdetails
    INNER JOIN orders USING (orderNumber)
    WHERE
        YEAR(shippedDate) = 2003
    GROUP BY customerNumber) AS cg
GROUP BY cg.customerGroups;