const SAVE_FORM = '/api/save_form';

$( "#analysisForm" ).submit(function(event) {
  event.preventDefault();
  
  if ($("#action-code option:selected").text() === "others" && $("#remark").text() === "") {
    alert('Remark field is required!!');
    return;
  }

  const formData = standardObject($(this).serializeArray());

  $(this)[0].reset();

  formData['event_time'] = `${formData.date} ${formData.hour}`;
  delete formData.date;
  delete formData.hour;

  callApi(SAVE_FORM, 'POST', formData, () => {
    alert('We received your data, thanks!');
  });
});

function standardObject(orginialArray) {
  const result = {};

  orginialArray.forEach((field) => {
    result[field.name] = field.value;
  });

  return result;
};
