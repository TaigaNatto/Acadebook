//var ncmb = new NCMB("02628f91c437e8b79acdbd3922456992dc526cef7552b72ab64bb01c0c794478","2b7ebc6f5b7d4b311eb8699daed902834d393b58f4cb9a74c22e0ab0783d79a7");
      //var pptxDB = ncmb.DataStore("pptxDB");

      var allObj;
      var allNum;

      var allResult=[];

      console.log("bbbbb");

      // pptxDB.fetchAll()
      // .then(function(results){
      //   allObj=results;
      //   allNum=results.length;

    //CSV�t�@�C�����ǂݍ��ފ֐�getCSV()�̒��`
    function getCSV(){

        var req = new XMLHttpRequest(); // HTTP�Ńt�@�C�����ǂݍ��ނ��߂�XMLHttpRrequest�I�u�W�F�N�g�𐶐�
        req.open("get", "praeterDB.csv", true); // �A�N�Z�X�����t�@�C�����w��
        req.send(null); // HTTP���N�G�X�g�̔��s

        // ���X�|���X���Ԃ��Ă�����convertCSVtoArray()���Ă�
        req.onload = function(){
    	convertCSVtoArray(req.responseText); // �n�������͓̂ǂݍ�����CSV�f�[�^
        }
    }

    // �ǂݍ�����CSV�f�[�^���񎟌��z���ɕϊ������֐�convertCSVtoArray()�̒��`
    function convertCSVtoArray(str){ // �ǂݍ�����CSV�f�[�^���������Ƃ��ēn������
        var result = []; // �ŏI�I�ȓ񎟌��z���������邽�߂̔z��
        var tmp = str.split("\n"); // ���s�����؂蕶���Ƃ��čs���v�f�Ƃ����z���𐶐�

        // �e�s���ƂɃJ���}�ŋ��؂������������v�f�Ƃ����񎟌��z���𐶐�
        for(var i=0;i<tmp.length;++i){
            result[i] = tmp[i].split(',');
        }

        //alert(result[1][2]); // 300yen

        allResult=result;
        allNum=tmp.length;

        allMode();
    }

    function allMode() {

      //子要素を全て削除
      var element_pare = document.getElementById("result-draw");
      while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

      for (var i = 0; i < allNum; i++) {
        //[title][main]
        //���ȏ��̒ǉ�
        addTextBooks(i);
      }

    }

    function cMode(){

      //子要素を全て削除
      var element_pare = document.getElementById("mainDraw");
      while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

      var cnt=0;
      for (var i = 0; i < allNum; i++) {
        //[title][main]
        //���ȏ��̒ǉ�
        var mode=allResult[i][2];
        if(mode=='C言語'){
          cnt++;
          addTextBooks(i,cnt);
        }

      }
    }

    function androidMode(){

      //子要素を全て削除
      var element_pare = document.getElementById("mainDraw");
      while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

      var cnt=0;
      for (var i = 0; i < allNum; i++) {
        //[title][main]
        //���ȏ��̒ǉ�
        var mode=allResult[i][2];
        if(mode=='Android'){
          cnt++;
          addTextBooks(i,cnt);
        }

      }
    }

    function unityMode(){

      //子要素を全て削除
      var element_pare = document.getElementById("mainDraw");
      while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

      var cnt=0;
      for (var i = 0; i < allNum; i++) {
        //[title][main]
        //���ȏ��̒ǉ�
        var mode=allResult[i][2];
        if(mode=='Unity'){
          cnt++;
          addTextBooks(i,cnt);
        }

      }
    }

    function otherMode(){

      //子要素を全て削除
      var element_pare = document.getElementById("mainDraw");
      while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

      var cnt=0;
      for (var i = 0; i < allNum; i++) {
        //[title][main]
        //���ȏ��̒ǉ�
        var mode=allResult[i][2];
        if(mode=='その他'){
          cnt++;
          addTextBooks(i,cnt);
        }

      }
    }

    function addTextBooks(i){
      var mainObj = document.createElement("div");//div
      var title=allResult[i][0];
      var sub=allResult[i][1];
      var image=allResult[i][2];
      var type=allResult[i][3];
      var typeColor;
      //人材
      if(type=='1'){
        typeColor='card border-info mb-3';
      }
      //モノ
      else if(type=='2'){
        typeColor='card border-warning mb-3';
      }
      //企業
      else if(type=='3'){
        typeColor='card border-success mb-3';
      }
      else{
        typeColor='card';
      }
      mainObj.innerHTML = '<div class="'+typeColor+'" style="width: 40rem; height: 12rem; margin-top:10px; " align="left"> <div class="menu"> <li> <img src="'+image+'" width="190px" height="190px" style="object-fit: cover;"> <div style="margin: 0 0 0 200px;"> <p class="title" style="font-size:30;">'+title+'</p> <p class="desc">'+sub+'</p> </div> </li> </div> </div>';//�{�^���Ƃ��ɂ����Ȃ炱����HTML����������
      var parent_object = document.getElementById("result-draw");
      parent_object.appendChild(mainObj);
    }

    getCSV(); //�ŏ��Ɏ��s������


      //   })
      //  .catch(function(err){
      //     console.log(err);
      //   });

      function change(pos){

        var htmlData=allResult[pos][1];

          console.log("cccc");
        document.getElementById("frame").innerHTML = htmlData;

      }

      function searchStart(){
        //子要素を全て削除
        var element_pare = document.getElementById("result-draw");
        while (element_pare.firstChild) element_pare.removeChild(element_pare.firstChild);

        for (var i = 0; i < allNum; i++) {
          //[title][main]
          //���ȏ��̒ǉ�
          var sh=allResult[i][4];
          // var mainObj = document.createElement("div");//div
          // mainObj.innerHTML = typeof sh+"です";
          // var parent_object = document.getElementById("result-draw");
          // parent_object.appendChild(mainObj);
          if(sh==1){
            addTextBooks(i);

          }
        }
      }
