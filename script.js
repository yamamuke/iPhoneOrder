$(function() {
  $('callmodal').on('click', function() {
    $('#modal').modal('show');
  });

  $('#submit').on('click', function() {
    var table = document.getElementById("datatable");
    //行追加
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    cell1.textContent = document.getElementById("sctask").value;
    cell2.textContent = document.getElementById("userid").value;
    cell3.textContent = document.getElementById("username").value;
    cell4.textContent = document.getElementById("company").value;
    cell5.textContent = document.getElementById("department").value;
    cell6.textContent = document.getElementById("site").value;
    cell7.textContent = document.getElementById("comment").value;
    cell8.textContent = document.getElementById("orderst").value;
    //cell9のプルダウン作成
    var select = document.createElement("select");
    cell9.appendChild(select);
    select.id = 'select';
    var getSelect = document.getElementById("select");
    var option0 = document.createElement("option");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    option0.id = 'option0';
    option1.id = 'option1';
    option2.id = 'option2';
    getSelect.appendChild(option0);
    var getOption0 = document.getElementById("option0");
    getOption0.textContent = ''
    getSelect.appendChild(option1);
    var getOption1 = document.getElementById("option1");
    getOption1.textContent = '発送準備中';
    getSelect.appendChild(option2);
    var getOption2 = document.getElementById("option2");
    getOption2.textContent = '発送済';
    //cell10に削除ボタン作成
    cell10.innerHTML = '<input type="button" value="削除" id="sutmit" onclick="delcol(this)">';

    $('#modal').modal('hide');

    $('#modal').on('hidden.bs.modal', function (event) {
      //モーダルが非表示になったら値をクリア
      $('#sctask').val('');
      $('#userid').val('');
      $('#username').val('');
      $('#company').val('');
      $('#department').val('');
      $('#site').val('初台');
      $('#comment').val('');
      $('#orderst').val('発注準備中');
    })
  });
})

function delcol(obj) {
  //削除ボタンを押した行を取得
  tr = obj.parentNode.parentNode;
  //trのインデックスを取得して行を削除
  tr.parentNode.deleteRow(tr.sectionRowIndex);
}
