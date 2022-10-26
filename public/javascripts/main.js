
$('#Todo_Input').submit((e) => {
   e.preventDefault()
    $.ajax({
        url: '/add_todo',
        data: $('#Todo_Input').serialize(),
        method: 'post',
        success: (Response) => {
            if (Response.Response) {
                $('#Input_Data').val('')
                $("#Datalists").load(window.location.href + " #Datalists");
            }
        }
    })
})

function TodoStatus(Todo_Id) {
    let onOffBtn = document.getElementById('Todo'+Todo_Id)
    if (!onOffBtn.checked) {
        $.ajax({
            url: '/Inactive_Todo',
            method: 'post',
            data: { TodoID: Todo_Id },
            success: () => {
                $( "#Datalists" ). load(window. location. href + " #Datalists")
            }
        })
    } else if (onOffBtn.checked) {
        $.ajax({
            url: '/Active_Todo',
            method: 'post',
            data: { TodoID: Todo_Id },
            success: (response) => {
                if(response.status){
                    $( "#Datalists-profile" ). load(window. location. href + " #Datalists-profile" )
                    // $( "#pills-profile" ). load(window. location. href + " #pills-profile");
                }
            }
        })
    }
}
function DeleteTodo(Todo_Id) {
    $.ajax({
        url: '/remove_todo',
        data:{TodoID:Todo_Id} ,
        method: 'post',
        success: (Response) => {
            if (Response.Response) {
                $('#Input_Data').val('')
                $("#Datalists").load(window.location.href + " #Datalists");
            }
        }
    })
}