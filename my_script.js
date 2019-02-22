function solve() {
    var operator_matematika = document.getElementsByName("math_Operators"); //tampung radio button
    var txtNilaiPertama = document.getElementById("number1_TextBox").value; //tampung first value
    var txtNilaiKedua = document.getElementById("number2_TextBox").value; //tampung second value

    // validasi form kosong
    if (txtNilaiPertama == "") {
        var math_Results = "<div class='alert alert-danger' role='alert'>Enter the first value!</div>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    } else if (txtNilaiKedua == "") {
        var math_Results = "<div class='alert alert-danger' role='alert'>Enter the second value!</div>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    }

    // cek jika radio button index 0 (penambahan) dipilih
    if (operator_matematika[0].checked == true) {
        sum = parseInt(txtNilaiPertama) + parseInt(txtNilaiKedua);
        results = "<div class='alert alert-success' role='alert'> The sum of " + txtNilaiPertama +
            " and " + txtNilaiKedua + " is <b style='color:red;'>" + sum + "</b>.</div>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    // cek jika radio button index 1 (pengurangan) dipilih
    } else if (operator_matematika[1].checked == true) {
        diff = parseInt(txtNilaiPertama) - parseInt(txtNilaiKedua);
        results = "<div class='alert alert-success' role='alert'> The difference between " +
            txtNilaiPertama + " and " + txtNilaiKedua + " is <b style='color:red;'>" + diff + "</b>.</div>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    // cek jika radio button index 2 (perkalian) dipilih
    } else if (operator_matematika[2].checked == true) {
        product = parseInt(txtNilaiPertama) * parseInt(txtNilaiKedua);
        results = "<div class='alert alert-success' role='alert'>The product between " +
            txtNilaiPertama + " and " + txtNilaiKedua + " is <b style='color:red;'>" + product + "</b>.</div>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    // cek jika radio button index 3 (pembagian) dipilih
    } else if (operator_matematika[3].checked == true) {
        quotient = parseInt(txtNilaiPertama) / parseInt(txtNilaiKedua);
        results = "<div class='alert alert-success' role='alert'>The quotient between " +
            txtNilaiPertama + " and " + txtNilaiKedua + " is <b style='color:red;'>" + quotient + "</b>. </div>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    } else {
        var math_Results = "<span class='warning'>Select your math operators.</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    }
    return true;
}

function reset_Operators() {
    document.getElementById('math_Results').innerHTML = '';
}

function clear() {
    document.getElementById('math_Results').innerHTML = "";
    txtNilaiPertama = "";
    txtNilaiKedua = "";
    txtNilaiPertama.focus();
}