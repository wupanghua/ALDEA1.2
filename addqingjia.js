// 失去焦点时检测
weui.form.checkIfBlur('#form');
// 表单提交
document.querySelector('#formSubmitBtn').addEventListener('click', function () {
    weui.form.validate('#form', function (error) {
        if (!error) {
			 if(confirm('申请提交后无法修改，是否提交？')){
				var loading = weui.loading('提交中...');
				setTimeout(function () {
					loading.hide();
					document.querySelector('#sub_form').action="addqingjia_do.asp";
					document.querySelector('#sub_form').method="post";
					document.querySelector('#sub_form').submit();
				}, 1000);	
            }
		}
    });
});


document.querySelector('#r1').addEventListener('click', function () {
	document.querySelector('#cxrq').value='';
	document.querySelector('#fxrq').value='';
	document.querySelector('#fxrq').disabled = true;
});

document.querySelector('#r2').addEventListener('click', function () {
	document.querySelector('#cxrq').value='';
	document.querySelector('#fxrq').value='';
	document.querySelector('#fxrq').disabled = true;
});

document.querySelector('#r3').addEventListener('click', function () {
	document.querySelector('#cxrq').value='';
	document.querySelector('#fxrq').value='';
	document.querySelector('#fxrq').disabled = true;
});

document.querySelector('#cxrq').addEventListener('click', function () {
	var d = new Date();
	var d1 = new Date();
	var d1=d1.setDate(d1.getDate()+1);
	var jjrStr="2020-9-25,2020-9-26,2020-9-27,2020-9-28,2020-9-29,2020-9-30,2020-10-1,2020-10-2,2020-10-3,2020-10-4,2020-10-5,2020-10-6,2020-10-7,2020-10-8,2020-10-9,2020-10-10,2020-10-11,2020-10-12,2020-10-13,2020-10-14,2020-10-15,2020-10-16,";
	d1=new Date(d1);
	weui.datePicker({
		start: d,
		end:d1,
		onConfirm: function (result) {
			document.querySelector('#cxrq').value = result[0]+"-"+result[1]+"-"+result[2];
			if(/*jjrStr.indexOf(document.querySelector('#cxrq').value)>=0*/1){
				document.querySelector('#fxrq').disabled = false;
			}
			else{
				document.querySelector('#fxrq').disabled = true;
				if(document.querySelector('#r2').checked || document.querySelector('#r3').checked){
					alert('申请当日建议不要出市，如有特殊需求请联系辅导员！')
					document.querySelector('#cxrq').value='';
					document.querySelector('#fxrq').value='';
					return;
				}
			}
			document.querySelector('#cxrq').value = result[0]+"-"+result[1]+"-"+result[2];
			document.querySelector('#fxrq').value = result[0]+"-"+result[1]+"-"+result[2];
			document.querySelector('#fxrqh').value = result[0]+"-"+result[1]+"-"+result[2];	
		},
		title: ''
	});
});


document.querySelector('#fxrq').addEventListener('click', function () {
	var d2 = new Date();
	weui.datePicker({
		start: document.querySelector('#cxrq').value,
		end: d2.getFullYear(),
		onConfirm: function (result) {
			document.querySelector('#fxrq').value = result[0]+"-"+result[1]+"-"+result[2];
			document.querySelector('#fxrqh').value = result[0]+"-"+result[1]+"-"+result[2];
		},
		title: ''
	});
});


/*var sjarr=[{
            label: '0:00:00',
            value: '0:00:00'
        }, {
            label: '1:00:00',
            value: '1:00:00'
        }, {
            label: '2:00:00',
            value: '2:00:00'
        }, {
            label: '3:00:00',
            value: '3:00:00'
        }, {
            label: '4:00:00',
            value: '4:00:00'
        }, {
            label: '5:00:00',
            value: '5:00:00'
        }, {
            label: '6:00:00',
            value: '6:00:00'
        }, {
            label: '7:00:00',
            value: '7:00:00'
        },{
            label: '8:00:00',
            value: '8:00:00'
        }, {
            label: '9:00:00',
            value: '9:00:00'
        }, {
            label: '10:00:00',
            value: '10:00:00'
        }, {
            label: '11:00:00',
            value: '11:00:00'
        }, {
            label: '12:00:00',
            value: '12:00:00'
        }, {
            label: '13:00:00',
            value: '13:00:00'
        }, {
            label: '14:00:00',
            value: '14:00:00'
        }, {
            label: '15:00:00',
            value: '15:00:00'
        }, {
            label: '16:00:00',
            value: '16:00:00'
        }, {
            label: '17:00:00',
            value: '17:00:00'
        }, {
            label: '18:00:00',
            value: '18:00:00'
        }, {
            label: '19:00:00',
            value: '19:00:00'
        }, {
            label: '20:00:00',
            value: '20:00:00'
        }, {
            label: '21:00:00',
            value: '21:00:00'
        }, {
            label: '22:00:00',
            value: '22:00:00'
        }, {
            label: '23:00:00',
            value: '23:00:00'
        }];

document.querySelector('#cxsj').addEventListener('click', function () {
	weui.picker(sjarr, {
		onConfirm: function (result) {
			document.querySelector('#cxsj').value = result;
		},
		title: ''
	});
});


document.querySelector('#fxsj').addEventListener('click', function () {
	weui.picker(sjarr, {
		onConfirm: function (result) {
			document.querySelector('#fxsj').value = result;
		},
		title: ''
	});
});*/
