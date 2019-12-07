//generalState3
$("#generalState3").change(function() {
  if ($(this).val() == 3) {
    $('#generalState3aDiv').show();
    $('#generalState3a').attr('required', '');
    $('#generalState3a').attr('data-error', 'This field is required.');
  } else {
    $('#generalState3aDiv').hide();
    $('#generalState3a').removeAttr('required');
    $('#generalState3a').removeAttr('data-error');
  }
});
$("#generalState3").trigger("change");

//genearl state 4a
$("#generalState4").change(function() {
  if ($(this).val() == 1) {
    $('#generalState4aDiv').show();
    $('#generalState4a').attr('required', '');
    $('#generalState4a').attr('data-error', 'This field is required.');
  } else {
    $('#generalState4aDiv').hide();
    $('#generalState4a').removeAttr('required');
    $('#generalState4a').removeAttr('data-error');
  }
});
$("#generalState4").trigger("change");

//First pregnancy
$("#FirstPreg").change(function() {
  if ($(this).val() == 2) {
    //a
    $('#NumPregDiv').show();
    $('#NumPreg').attr('required', '');
    $('#NumPreg').attr('data-error', 'This field is required.');
    //b
    $('#miscarriagesDiv').show();
    $('#miscarriages').attr('required', '');
    $('#miscarriages').attr('data-error', 'This field is required.');
    //c
    $('#EndLastDiv').show();
    $('#EndLast').attr('required', '');
    $('#EndLast').attr('data-error', 'This field is required.');
    //d
    $('#fertilitytreatmentDiv').show();
    $('#fertilitytreatment').attr('required', '');
    $('#fertilitytreatment').attr('data-error', 'This field is required.');
    //e
    $('#LiveBirthsProbDiv').show();
    $('#LiveBirthsProb').attr('required', '');
    $('#LiveBirthsProb').attr('data-error', 'This field is required.');
    //f
    $('#CondLastDiv').show();
    $('#CondLast').attr('required', '');
    $('#CondLast').attr('data-error', 'This field is required.');

  } else {
    //a
    $('#NumPregDiv').hide();
    $('#NumPreg').removeAttr('required');
    $('#NumPreg').removeAttr('data-error');
    //b
    $('#miscarriagesDiv').hide();
    $('#miscarriages').removeAttr('required');
    $('#miscarriages').removeAttr('data-error');
    //c
    $('#EndLastDiv').hide();
    $('#EndLast').removeAttr('required');
    $('#EndLast').removeAttr('data-error');
    //d
    $('#fertilitytreatmentDiv').hide();
    $('#fertilitytreatment').removeAttr('required');
    $('#fertilitytreatment').removeAttr('data-error');
    //e
    $('#LiveBirthsProbDiv').hide();
    $('#LiveBirthsProb').removeAttr('required');
    $('#LiveBirthsProb').removeAttr('data-error');
    //f
    $('#CondLastDiv').hide();
    $('#CondLast').removeAttr('required');
    $('#CondLast').removeAttr('data-error');
  }
});
$("#FirstPreg").trigger("change");

$("#miscarriages").change(function() {
  if ($(this).val() == 1) {
    $('#NumMiscarriagesDiv').show();
    $('#NumMiscarriages').attr('required', '');
    $('#NumMiscarriages').attr('data-error', 'This field is required.');
  } else {
    $('#NumMiscarriagesDiv').hide();
    $('#NumMiscarriages').removeAttr('required');
    $('#NumMiscarriages').removeAttr('data-error');
  }
});
$("#miscarriages").trigger("change");

$("#LiveBirthsProb").change(function() {
  if ($(this).val() == 1) {
    //a
    $('#WhatProbLiveBirthsDiv').show();
    $('#WhatProbLiveBirths').attr('required', '');
    $('#WhatProbLiveBirths').attr('data-error', 'This field is required.');
    //b
    $('#BabyWeightDiv').show();
    $('#BabyWeight').attr('required', '');
    $('#BabyWeight').attr('data-error', 'This field is required.');
    //c
    $('#WeeksPregDeliveryDiv').show();
    $('#WeeksPregDelivery').attr('required', '');
    $('#WeeksPregDelivery').attr('data-error', 'This field is required.');
    //d
    $('#EarlyLightDiv').show();
    $('#EarlyLight').attr('required', '');
    $('#EarlyLight').attr('data-error', 'This field is required.');
  } else {
    //a
    $('#WhatProbLiveBirthsDiv').hide();
    $('#WhatProbLiveBirths').removeAttr('required');
    $('#WhatProbLiveBirths').removeAttr('data-error');
    //b
    $('#BabyWeightDiv').hide();
    $('#BabyWeight').removeAttr('required');
    $('#BabyWeight').removeAttr('data-error');
    //c
    $('#WeeksPregDeliveryDiv').hide();
    $('#WeeksPregDelivery').removeAttr('required');
    $('#WeeksPregDelivery').removeAttr('data-error');
    //d
    $('#EarlyLightDiv').hide();
    $('#EarlyLight').removeAttr('required');
    $('#EarlyLight').removeAttr('data-error');
  }
});
$("#LiveBirthsProb").trigger("change");

$("#EarlyLight").change(function() {
  if ($(this).val() == 1) {
    $('#YesEarlyLightDiv').show();
    $('#YesEarlyLight').attr('required', '');
    $('#YesEarlyLight').attr('data-error', 'This field is required.');
  } else {
    $('#YesEarlyLightDiv').hide();
    $('#YesEarlyLight').removeAttr('required');
    $('#YesEarlyLight').removeAttr('data-error');
  }
});
$("#EarlyLight").trigger("change");

$("#CondLast").change(function() {
  if ($(this).val() == 1) {
    $('#YesCondLastDiv').show();
    $('#YesCondLast').attr('required', '');
    $('#YesCondLast').attr('data-error', 'This field is required.');
  } else {
    $('#YesCondLastDiv').hide();
    $('#YesCondLast').removeAttr('required');
    $('#YesCondLast').removeAttr('data-error');
  }
});
$("#CondLast").trigger("change");

$("#Doctor").change(function() {
  if ($(this).val() == 1) {
    //1
    $('#WhenDoctorDiv').show();
    $('#WhenDoctor').attr('required', '');
    $('#WhenDoctor').attr('data-error', 'This field is required.');
    //2
    $('#DoctorInfoDiv').show();
    $('#DoctorInfo').attr('required', '');
    $('#DoctorInfo').attr('data-error', 'This field is required.');
  } else {
    //1
    $('#WhenDoctorDiv').hide();
    $('#WhenDoctor').removeAttr('required');
    $('#WhenDoctor').removeAttr('data-error');
    //2
    $('#DoctorInfoDiv').hide();
    $('#DoctorInfo').removeAttr('required');
    $('#DoctorInfo').removeAttr('data-error');
  }
});
$("#Doctor").trigger("change");

$("#OtherCond").change(function() {
  if ($(this).val() == 1) {
    $('#YesOtherCondDiv').show();
    $('#YesOtherCond').attr('required', '');
    $('#YesOtherCond').attr('data-error', 'This field is required.');
  } else {
    $('#YesOtherCondDiv').hide();
    $('#YesOtherCond').removeAttr('required');
    $('#YesOtherCond').removeAttr('data-error');
  }
});
$("#OtherCond").trigger("change");

$("#Medications").change(function() {
  if ($(this).val() == 1) {
    $('#YesMedicationsDiv').show();
    $('#YesMedications').attr('required', '');
    $('#YesMedications').attr('data-error', 'This field is required.');
  } else {
    $('#YesMedicationsDiv').hide();
    $('#YesMedications').removeAttr('required');
    $('#YesMedications').removeAttr('data-error');
  }
});
$("#Medications").trigger("change");

$("#Medications").change(function() {
  if ($(this).val() == 1) { //and ($("#Doctor").val() == 1) --> {
    $('#MedsPrenatalDiv').show();
    $('#MedsPrenatal').attr('required', '');
    $('#MedsPrenatal').attr('data-error', 'This field is required.');
  } else {
    $('#MedsPrenatalDiv').hide();
    $('#MedsPrenatal').removeAttr('required');
    $('#MedsPrenatal').removeAttr('data-error');
  }
});
$("#Medications").trigger("change");

$("#IfProbGums").change(function() {
  if ($(this).val() == 1) {
    $('#ProbGumsDiv').show();
    $('#ProbGums').attr('required', '');
    $('#ProbGums').attr('data-error', 'This field is required.');
  } else {
    $('#ProbGumsDiv').hide();
    $('#ProbGums').removeAttr('required');
    $('#ProbGums').removeAttr('data-error');
  }
});
$("#IfProbGums").trigger("change");

$("#IfTobacco").change(function() {
  if ($(this).val() == 1) {
    //a
    $('#IfTobaccod3Div').show();
    $('#IfTobaccod3').attr('required', '');
    $('#IfTobaccod3').attr('data-error', 'This field is required.');
    //b
    $('#IfTobacconowDiv').show();
    $('#IfTobacconow').attr('required', '');
    $('#IfTobacconow').attr('data-error', 'This field is required.');
  } else {
    //a
    $('#IfTobaccod3Div').hide();
    $('#IfTobaccod3').removeAttr('required');
    $('#IfTobaccod3').removeAttr('data-error');
    //b
    $('#IfTobacconowDiv').hide();
    $('#IfTobacconow').removeAttr('required');
    $('#IfTobacconow').removeAttr('data-error');
  }
});
$("#IfTobacco").trigger("change");

$("#IfTobacconow").change(function() {
  if ($(this).val() == 1) {
    $('#QuitTobaccoDiv').show();
    $('#QuitTobacco').attr('required', '');
    $('#QuitTobacco').attr('data-error', 'This field is required.');
  } else {
    $('#QuitTobaccoDiv').hide();
    $('#QuitTobacco').removeAttr('required');
    $('#QuitTobacco').removeAttr('data-error');
  }
});
$("#IfTobacconow").trigger("change");

$("#AlcoholNow").change(function() {
  if ($(this).val() == 1) {
    $('#AlcoholNowQuitDiv').show();
    $('#AlcoholNowQuit').attr('required', '');
    $('#AlcoholNowQuit').attr('data-error', 'This field is required.');
  } else {
    $('#AlcoholNowQuitDiv').hide();
    $('#AlcoholNowQuit').removeAttr('required');
    $('#AlcoholNowQuit').removeAttr('data-error');
  }
});
$("#AlcoholNow").trigger("change");

$("#DrugsEver").change(function() {
  if ($(this).val() == 1) {
    //a
    $('#LastDrugsDiv').show();
    $('#LastDrugs').attr('required', '');
    $('#LastDrugs').attr('data-error', 'This field is required.');
    //b
    $('#DrugsNowDiv').show();
    $('#DrugsNow').attr('required', '');
    $('#DrugsNow').attr('data-error', 'This field is required.');
  } else {
    //a
    $('#LastDrugsDiv').hide();
    $('#LastDrugs').removeAttr('required');
    $('#LastDrugs').removeAttr('data-error');
    //b
    $('#DrugsNowDiv').hide();
    $('#DrugsNow').removeAttr('required');
    $('#DrugsNow').removeAttr('data-error');
  }
});
$("#DrugsEver").trigger("change");

$("#DrugsNow").change(function() {
  if ($(this).val() == 1) {
    $('#DrugsNowQuitDiv').show();
    $('#DrugsNowQuit').attr('required', '');
    $('#DrugsNowQuit').attr('data-error', 'This field is required.');
  } else {
    $('#DrugsNowQuitDiv').hide();
    $('#DrugsNowQuit').removeAttr('required');
    $('#DrugsNowQuit').removeAttr('data-error');
  }
});
$("#DrugsNow").trigger("change");

$("#DrugsNowQuit").change(function() {
  if ($(this).val() == 1) {
    $('#DrugsNowQuitYesDiv').show();
    $('#DrugsNowQuitYes').attr('required', '');
    $('#DrugsNowQuitYes').attr('data-error', 'This field is required.');
  } else {
    $('#DrugsNowQuitYesDiv').hide();
    $('#DrugsNowQuitYes').removeAttr('required');
    $('#DrugsNowQuitYes').removeAttr('data-error');
  }
});
$("#DrugsNowQuit").trigger("change");

$("#PartnearThreat").change(function() {
  if ($(this).val() == 1) {
    $('#PartnerThreatYesDiv').show();
    $('#PartnerThreatYes').attr('required', '');
    $('#PartnerThreatYes').attr('data-error', 'This field is required.');
  } else {
    $('#PartnerThreatYesDiv').hide();
    $('#PartnerThreatYes').removeAttr('required');
    $('#PartnerThreatYes').removeAttr('data-error');
  }
});
$("#PartnearThreat").trigger("change");

$("#IfDepressed").change(function() {
  if ($(this).val() == 1) {
    $('#DepressedDiv').show();
    $('#Depressed').attr('required', '');
    $('#Depressed').attr('data-error', 'This field is required.');
  } else {
    $('#DepressedDiv').hide();
    $('#Depressed').removeAttr('required');
    $('#Depressed').removeAttr('data-error');
  }
});
$("#IfDepressed").trigger("change");

$("#Counseling").change(function() {
  if ($(this).val() == 1) {
    $('#CounselingYesDiv').show();
    $('#CounselingYes').attr('required', '');
    $('#CounselingYes').attr('data-error', 'This field is required.');
  } else {
    $('#CounselingYesDiv').hide();
    $('#CounselingYes').removeAttr('required');
    $('#CounselingYes').removeAttr('data-error');
  }
});
$("#Counseling").trigger("change");

$("#IfSupport").change(function() {
  if ($(this).val() == 2) {
    $('#SupportNoDiv').show();
    $('#SupportNo').attr('required', '');
    $('#SupportNo').attr('data-error', 'This field is required.');
  } else {
    $('#SupportNoDiv').hide();
    $('#SupportNo').removeAttr('required');
    $('#SupportNo').removeAttr('data-error');
  }
});
$("#IfSupport").trigger("change");









$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldGroupDiv').show();
    $('#otherField1').attr('required', '');
    $('#otherField1').attr('data-error', 'This field is required.');
    $('#otherField2').attr('required', '');
    $('#otherField2').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldGroupDiv').hide();
    $('#otherField1').removeAttr('required');
    $('#otherField1').removeAttr('data-error');
    $('#otherField2').removeAttr('required');
    $('#otherField2').removeAttr('data-error');
  }
});
$("#seeAnotherFieldGroup").trigger("change");
