/**
* @author : Niraj Bohra
* @version 1.0
*
*/

// Hide the profile section
clearError();
$("#data").css("display" , "none");

// On Search 
function searchUser()
{
  // input 
  var username = $("#username").val();
  // check for null
  if (username === null || username === "")
  {
      $('#error').addClass('alert alert-danger');
      $('#error').html('<strong>Error :</strong> Invalid input ');
      setTimeout(clearError, 6000);
  }
  else 
  {
    // remove error box
    clearError();
    $('#userProfile').remove();
    // API get call
    $.ajax({
    url: "https://api.github.com/users/"+username,
    type: 'GET',
    success: function(data){ 
          $("#data").css("display" , "flex");
            $("#avatar").attr("src", data.avatar_url);
            $("#avatar").attr("width", 200);
            $("#avatar").attr("heigth", 200);
            $("#name").text(data.login);
            $('#userURL').text(data.html_url);
             $("#userURL").attr("href", data.html_url);
            $('#followers').text(data.followers);
            $('#following').text(data.following);
            $('#numberOfRepos').text(data.public_repos);
            $('#company').text(data.company == null? "Not set" : data.company );
            $('#hireStatus').text(data.hireable == null ? "Not Set" : data.hireable ); 
          },
          error: function(data) {
            $("#data").css("display" , "none");
            $('#error').addClass('alert alert-danger');
            $('#error').html('<strong>Error :</strong> User not found ');
            setTimeout(clearError, 6000);

              
          }
      });
   
   }
}
// Clear search for next search
function clearSearch()
{
   $(':text').val('');
   $("#data").css("display" , "none");
}

// Removes error messages using 

function clearError()
{
  $('#error').removeClass('alert alert-danger');
  $('#error').html(' ');
  $(':text').val('');

}
