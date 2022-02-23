var data = [
    {
        "id": 10001,
        "birthDate": "1953-09-01",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-25",
    },
    {
        "id": 10002,
        "birthDate": "1964-06-01",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-20",
    },
    {
        "id": 10003,
        "birthDate": "1959-12-02",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
        "id": 10004,
        "birthDate": "1954-04-30",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-11-30",

    },
    {
        "id": 10005,
        "birthDate": "1955-01-20",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-11T22:00:00.000+0000",

    }
]
var nextId = 10006;
var btnElimina = "<button class='btn btn-danger elimina'>Elimina</button>"
var btnModifica = "<button class='btn btn-warning modifica' data-bs-toggle='modal' data-bs-target='#Modmodal'>Modifica</button>"

//una volta che la pagina viene caricata, vengono inseriti gli elementi nella tabella
$(document).ready(
    displayTable(),
    aggiungi(),
    modifica(),
    elimina()
);

//https://www.geeksforgeeks.org/how-to-fetch-data-from-json-file-and-display-in-html-table-using-jquery/
function displayTable() 
{
    var dipendente;

    $.each(data, function (i, value) {
        dipendente += '<tr>';
        dipendente += '<th scope="row">' + value.id + '</th>';
        dipendente += '<td>' + value.firstName + '</td>';
        dipendente += '<td>' + value.lastName + '</td>';
        dipendente += '<td>' + btnElimina + '</td>';
        dipendente += '<td>' + btnModifica + '</td>';
        dipendente += '</tr>';
    });
    $("tbody").append(dipendente);
}

function aggiungi() {
    $("#aggiungi").click(function () 
    {
        var dipendente;
        var nome = $("#nome").val();
        var cognome = $("#cognome").val();

        dipendente += '<tr>';
        dipendente += '<th scope="row">' + nextId + '</th>';
        dipendente += '<td>' + nome + '</td>';
        dipendente += '<td>' + cognome + '</td>';
        dipendente += '<td>' + btnElimina + '</td>'
        dipendente += '<td>' + btnModifica + '</td>';
        dipendente += '</tr>';

        $("tbody").append(dipendente);

        nextId++;

        elimina();
    });
}

function elimina() 
{
    $(".elimina").click(function () 
    {
        $(this).parents("tr").fadeOut("fast");
    });
}

function modifica() 
{
    $('modalShow').click(function(event)
    {
        
        
    });
}
    
