db.createUser(
    {
      user: "myuser",
      pwd: "mysecret",
      roles: [ "readWrite", "dbAdmin" ]
    }
 );

db.SUBJECT.insertMany([
    { 
        "ID": "user",
        "NAME": "com/adr/hellocore/fxml/datalist?datatable=com/adr/hellocore/security/user",
        "DISPLAYNAME": "User"
    }, {
        "ID": "role",
        "NAME": "com/adr/hellocore/fxml/datalist?datatable=com/adr/hellocore/security/role",
        "DISPLAYNAME": "Role"
    }, {
        "ID": "permission",
        "NAME": "com/adr/hellocore/fxml/datalist?datatable=com%2Fadr%2Fhellocore%2Fsecurity%2Fpermission&",
        "DISPLAYNAME": "Permission"
    }, {
        "ID": "subject",
        "NAME": "com/adr/hellocore/fxml/datalist?datatable=com/adr/hellocore/security/subject",
        "DISPLAYNAME": "Subject"
    }
 ]);
 db.ROLE.insertMany([
     {
        "ID": "a",   
        "NAME": "ADMIN",
        "DISPLAYNAME": "Administrator"
    }, {
        "ID": "m",   
        "NAME": "MANAGER",
        "DISPLAYNAME": "Manager"
    }, {
        "ID": "g",   
        "NAME": "GUEST",
        "DISPLAYNAME": "Guest"
    }
]);
db.USERNAME.insertMany([
    {
        "ID": "admin",   
        "NAME": "admin",
        "DISPLAYNAME": "Administrator",
        "PASSWORD": "password:dMWfvlSiYZqfbzXzeolVC0CwgMLMehsUuT1q4tVLwn4=:ujJstcNlrPBUv/0DztL0WQE6/SiqRcRcZXhzYq17qDE=",
        "CODECARD": null,
        "ROLE_ID": "a",
        "ACTIVE": true,
        "VISIBLE": true
    }, { 
        "ID": "manager",   
        "NAME": "manager",
        "DISPLAYNAME": "Manager",
        "PASSWORD": null,
        "CODECARD": null,
        "ROLE_ID": "m",
        "ACTIVE": true,
        "VISIBLE": true
    }, {
        "ID": "guest",   
        "NAME": "guest",
        "DISPLAYNAME": "Guest",
        "PASSWORD": null,
        "CODECARD": null,
        "ROLE_ID": "g",
        "ACTIVE": true,
        "VISIBLE": true
    }
]);
db.USERNAME_BYNAME.insertMany([
    {
        "NAME": "admin",
        "DISPLAYNAME": "Administrator",
        "ROLE": "ADMIN",
        "DISPLAYROLE": "Administrator",
        "PASSWORD": "password:dMWfvlSiYZqfbzXzeolVC0CwgMLMehsUuT1q4tVLwn4=:ujJstcNlrPBUv/0DztL0WQE6/SiqRcRcZXhzYq17qDE="
    }, {
        "NAME": "manager",
        "DISPLAYNAME": "Manager",
        "ROLE": "MANAGER",
        "DISPLAYROLE": "Manager",
        "PASSWORD": null
    }, {
        "NAME": "guest",
        "DISPLAYNAME": "Guest",
        "ROLE": "GUEST",
        "DISPLAYROLE": "Guest",
        "PASSWORD": null
    }
]);
db.TEST_USERNAME_VIEW.insertMany([
    {
        "ID": "admin",   
        "NAME": "admin",
        "DISPLAYNAME": "Administrator"        
    }, {
        "ID": "guest",   
        "NAME": "guest",
        "DISPLAYNAME": "Guest"        
    }, {
        "ID": "manager",   
        "NAME": "manager",
        "DISPLAYNAME": "Manager"        
    }
]);
db.ANONYMOUS_VISIBLE.insertMany([
    {
        "ID": "admin",   
        "NAME": "admin",
        "DISPLAYNAME": "Administrator"        
    }, {
        "ID": "guest",   
        "NAME": "guest",
        "DISPLAYNAME": "Guest"        
    }, {
        "ID": "manager",   
        "NAME": "manager",
        "DISPLAYNAME": "Manager"        
    }
]);
db.ROLE_SUBJECT.insertMany([
    {
        "ROLE": "MANAGER",   
        "SUBJECT": "com/adr/hellocore/fxml/datalist?datatable=com/adr/hellocore/security/user",
        "SUBJECTNAME": "User"        
    }, {
        "ROLE": "MANAGER",   
        "SUBJECT": "com/adr/hellocore/fxml/datalist?datatable=com/adr/hellocore/security/role",
        "SUBJECTNAME": "Role"        
    }, {
        "ROLE": "MANAGER",   
        "SUBJECT": "com/adr/hellocore/fxml/datalist?datatable=com%2Fadr%2Fhellocore%2Fsecurity%2Fpermission&",
        "SUBJECTNAME": "Permission"        
    }
]);