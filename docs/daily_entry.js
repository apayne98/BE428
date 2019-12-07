//weight
$("#IfWeight").change(function() {
  if ($(this).val() == 1) {
    $('#WeightYesDiv').show();
    $('#WeightYes').attr('required', '');
    $('#WeightYes').attr('data-error', 'This field is required.');
  } else {
    $('#WeightYesDiv').hide();
    $('#WeightYes').removeAttr('required');
    $('#WeightYes').removeAttr('data-error');
  }
});
$("#IfWeight").trigger("change");

//girth
$("#IfGirth").change(function() {
  if ($(this).val() == 1) {
    $('#GirthYesDiv').show();
    $('#GirthYes').attr('required', '');
    $('#GirthYes').attr('data-error', 'This field is required.');
  } else {
    $('#GirthYesDiv').hide();
    $('#GirthYes').removeAttr('required');
    $('#GirthYes').removeAttr('data-error');
  }
});
$("#IfGirth").trigger("change");

//Swelling
$("#IfSwelling").change(function() {
  if ($(this).val() == 1) {
    $('#SwellingYesDiv').show();
    $('#SwellingYes').attr('required', '');
    $('#SwellingYes').attr('data-error', 'This field is required.');
  } else {
    $('#SwellingYesDiv').hide();
    $('#SwellingYes').removeAttr('required');
    $('#SwellingYes').removeAttr('data-error');
  }
});
$("#IfSwelling").trigger("change");
