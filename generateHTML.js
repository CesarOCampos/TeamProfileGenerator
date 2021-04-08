var html = `
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <div class="row py-5">
                <div class="col-6">
                    <div class="card border-primary " style="width: 18rem;">
                        <div class="card-header bg-primary">
                            <h5 class="card-title">${manager.name}</h5>
                            <h5 class="card-title">Manager</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text">ID:${manager.id}</p>
                        <p class="card-text">email:<a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="card-text">office number:${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card border-primary " style="width: 18rem;">
                        <div class="card-header bg-primary">
                            <h5 class="card-title">${engineer.name}</h5>
                            <h5 class="card-title">Engineer</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">ID:${engineer.id}</p>
                            <p class="card-text">email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="card-text">Github Username:<a target = "_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></p>
                        </div>
                    </div>
                </div>
                </div><div class="row">
                <div class="col-4">
                    <div class="card border-primary " style="width: 18rem;">
                        <div class="card-header bg-primary">
                            <h5 class="card-title">${intern.name}</h5>
                            <h5 class="card-title">Intern</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">ID:${intern.id}</p>
                            <p class="card-text">email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="card-text">School:${intern.school}</p>
                        </div>
                    </div>
                </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>        
    </body>
</html>`;