const a5_0x3f1ffc=a5_0x1bb2;(function(_0x371c56,_0x4abf93){const _0x5178a4=a5_0x1bb2,_0x94369b=_0x371c56();while(!![]){try{const _0x4438d7=-parseInt(_0x5178a4(0x1c3))/0x1*(-parseInt(_0x5178a4(0x1d1))/0x2)+-parseInt(_0x5178a4(0x1f1))/0x3*(parseInt(_0x5178a4(0x1dd))/0x4)+-parseInt(_0x5178a4(0x1cc))/0x5+parseInt(_0x5178a4(0x1d4))/0x6+parseInt(_0x5178a4(0x1bb))/0x7*(parseInt(_0x5178a4(0x1b9))/0x8)+-parseInt(_0x5178a4(0x1e0))/0x9*(parseInt(_0x5178a4(0x1c6))/0xa)+parseInt(_0x5178a4(0x1f7))/0xb;if(_0x4438d7===_0x4abf93)break;else _0x94369b['push'](_0x94369b['shift']());}catch(_0x50c883){_0x94369b['push'](_0x94369b['shift']());}}}(a5_0xf0ca,0x9e123));const {Op}=require(a5_0x3f1ffc(0x1ef)),model=require('../models/index'),{default:axios}=require('axios'),moment=require(a5_0x3f1ffc(0x1da)),{sendNotif,getSuratTugas}=require(a5_0x3f1ffc(0x1f6)),{PegawaiBendahara}=require(a5_0x3f1ffc(0x1e6)),modelPengawasan=require(a5_0x3f1ffc(0x1e5)),modelKepegawaian=require(a5_0x3f1ffc(0x1d0)),getPaginationTable=(_0x25ab22,_0x5c566b)=>{const _0x2034a3=a5_0x3f1ffc,_0x4119d0=_0x5c566b?+_0x5c566b:0xa,_0x40487a=_0x25ab22?Math[_0x2034a3(0x1d7)](_0x25ab22-0x1)*_0x4119d0:0x0;return{'limit':_0x4119d0,'offset':_0x40487a};},getPagingData=(_0x2037e1,_0x42ca5a,_0xaa716f)=>{const _0x3aa1a0=a5_0x3f1ffc,{count:_0x5b078e,rows:_0x356d40}=_0x2037e1,_0x590622=_0x42ca5a?+_0x42ca5a:0x0,_0x48fdf0=Math[_0x3aa1a0(0x1d7)](_0x5b078e/_0xaa716f);return{'totalItems':_0x5b078e,'data':_0x356d40,'totalPages':_0x48fdf0,'currentPage':_0x590622};},getPagination=(_0x2645ec,_0x21929f)=>{const _0x1ba745=a5_0x3f1ffc,_0x402d26=_0x21929f?+_0x21929f:0xa,_0x48acf8=_0x2645ec?Math[_0x1ba745(0x1d7)](_0x2645ec-0x1)*_0x402d26:0x0;return{'limit':_0x402d26,'offset':_0x48acf8};};function a5_0x1bb2(_0x531033,_0x361d1f){const _0xf0ca1=a5_0xf0ca();return a5_0x1bb2=function(_0x1bb227,_0x50dd42){_0x1bb227=_0x1bb227-0x1b8;let _0x5b6fdf=_0xf0ca1[_0x1bb227];return _0x5b6fdf;},a5_0x1bb2(_0x531033,_0x361d1f);}module[a5_0x3f1ffc(0x1ca)]={async 'index'(_0x498140,_0x24f46a){const _0x2ac587=a5_0x3f1ffc;try{const {page:page=0x1,size:size=0xa,sortby:sortby='createdAt',orderby:orderby=_0x2ac587(0x1d8),search:_0x438ad3,byuser:_0x242285}=_0x498140['query'],{limit:_0x575cac,offset:_0x5dc4fc}=getPagination(page,size);let _0x35c474={};if(_0x438ad3){const _0x3a6768=await model[_0x2ac587(0x1bd)][_0x2ac587(0x1de)]({'attributes':[_0x2ac587(0x1eb)],'group':[_0x2ac587(0x1eb)]});let _0x5dbcf8=[];for(let _0x54c9ae=0x0;_0x54c9ae<_0x3a6768[_0x2ac587(0x1e7)];_0x54c9ae++){const _0xca60d8=_0x3a6768[_0x54c9ae]['dataValues'];_0x5dbcf8[_0x2ac587(0x1e8)](_0xca60d8['surat_tugas_id']);}const _0x22995d=await model[_0x2ac587(0x1bd)][_0x2ac587(0x1de)]({'attributes':[_0x2ac587(0x1c8)],'group':[_0x2ac587(0x1c8)]});let _0x132b87=[];for(let _0xbfc982=0x0;_0xbfc982<_0x22995d[_0x2ac587(0x1e7)];_0xbfc982++){const _0x26f320=_0x22995d[_0xbfc982][_0x2ac587(0x1c0)];_0x132b87[_0x2ac587(0x1e8)](_0x26f320[_0x2ac587(0x1c8)]);}const [_0x567e3e,_0xc281b4]=await Promise[_0x2ac587(0x1c9)]([axios['get'](process[_0x2ac587(0x1cf)][_0x2ac587(0x1ee)]+_0x2ac587(0x1db)+_0x438ad3+_0x2ac587(0x1cb)+_0x5dbcf8,{'headers':{'Authorization':_0x2ac587(0x1f2)+_0x498140[_0x2ac587(0x1df)]}}),axios[_0x2ac587(0x1c5)](process[_0x2ac587(0x1cf)][_0x2ac587(0x1ee)]+'/kepegawaian/data-tenaga-audit?get=all&search='+_0x438ad3+_0x2ac587(0x1cb)+_0x132b87,{'headers':{'Authorization':_0x2ac587(0x1f2)+_0x498140[_0x2ac587(0x1df)]}})]),_0x3fa830=_0x567e3e[_0x2ac587(0x1f8)][_0x2ac587(0x1f8)],_0x5c2898=_0xc281b4['data'][_0x2ac587(0x1f8)];let _0x1af4f8=[];for(let _0x26b344=0x0;_0x26b344<_0x3fa830[_0x2ac587(0x1e7)];_0x26b344++){const _0x2e8590=_0x3fa830[_0x26b344];_0x1af4f8[_0x2ac587(0x1e8)](_0x2e8590['id']);}_0x1af4f8[_0x2ac587(0x1e7)]>0x0&&(_0x35c474[_0x2ac587(0x1eb)]={[Op['in']]:_0x1af4f8});let _0x3364b0=[];for(let _0x18c29d=0x0;_0x18c29d<_0x5c2898[_0x2ac587(0x1e7)];_0x18c29d++){const _0x41689b=_0x5c2898[_0x18c29d];_0x3364b0['push'](_0x41689b['id']);}_0x3364b0[_0x2ac587(0x1e7)]>0x0&&(_0x35c474[_0x2ac587(0x1c8)]={[Op['in']]:_0x3364b0});}_0x498140[_0x2ac587(0x1f5)]['role_id']!==0x1&&_0x498140[_0x2ac587(0x1ed)][_0x2ac587(0x1c5)]!='all'&&(_0x35c474[_0x2ac587(0x1c8)]=_0x498140['user'][_0x2ac587(0x1c8)]);const _0x48fe7d=await model[_0x2ac587(0x1d5)]['findAndCountAll']({'where':_0x35c474,'order':[[sortby,orderby]],'limit':_0x575cac,'offset':_0x5dc4fc}),_0x3ea1e3=await Promise[_0x2ac587(0x1c9)](_0x48fe7d[_0x2ac587(0x1c2)][_0x2ac587(0x1cd)](async _0x59a349=>{const _0x3a33ed=_0x2ac587,_0x308e74=_0x59a349[_0x3a33ed(0x1c0)];_0x308e74['pegawai']=null;if(_0x308e74[_0x3a33ed(0x1c8)])try{const _0xa45553=await modelKepegawaian[_0x3a33ed(0x1ec)][_0x3a33ed(0x1be)]({'where':{'id':_0x308e74[_0x3a33ed(0x1c8)]}});_0x308e74[_0x3a33ed(0x1e4)]=_0xa45553;}catch(_0x13d189){console[_0x3a33ed(0x1ce)](_0x13d189);}_0x308e74[_0x3a33ed(0x1e1)]=null;if(_0x308e74[_0x3a33ed(0x1eb)])try{const _0x42ab90=await modelPengawasan['SuratTugas'][_0x3a33ed(0x1be)]({'where':{'id':_0x308e74[_0x3a33ed(0x1eb)]}});_0x308e74['surat_tugas']=_0x42ab90;}catch(_0x11522c){}return _0x308e74;})),_0x3328fd=getPagingData(_0x48fe7d,page,_0x575cac);_0x24f46a[_0x2ac587(0x1d9)]({'status':!![],..._0x3328fd,'data':_0x3ea1e3});}catch(_0x566afd){console[_0x2ac587(0x1ce)](_0x566afd),_0x24f46a[_0x2ac587(0x1d2)](0x190)[_0x2ac587(0x1d9)]({'status':![],'message':'terjadi\x20error'});}},async 'add'(_0x374e07,_0x47df68){const _0x1e99ee=a5_0x3f1ffc;try{var _0x4aa9c0=_0x374e07[_0x1e99ee(0x1ea)];(_0x4aa9c0[_0x1e99ee(0x1f0)]==''||!_0x4aa9c0['yg_bertugas_id'])&&(_0x4aa9c0['yg_bertugas_id']=_0x374e07[_0x1e99ee(0x1f5)][_0x1e99ee(0x1c8)]);const _0x3d642c=await model[_0x1e99ee(0x1d5)][_0x1e99ee(0x1e2)](_0x4aa9c0);return await sendNotif(_0x1e99ee(0x1c1),_0x3d642c['id'],_0x374e07[_0x1e99ee(0x1f5)]['pegawai_id'],_0x1e99ee(0x1d6),_0x1e99ee(0x1f4),_0x374e07[_0x1e99ee(0x1df)]),_0x47df68[_0x1e99ee(0x1d2)](0xc8)[_0x1e99ee(0x1d9)]({'status':!![],'data':_0x3d642c});}catch(_0x34cb16){return console[_0x1e99ee(0x1ce)](_0x34cb16),_0x47df68['status'](0x190)[_0x1e99ee(0x1d9)]({'status':![],'message':_0x1e99ee(0x1d3)});}},async 'detail'(_0x5b33cf,_0x40dbf7){const _0x40f92e=a5_0x3f1ffc;try{const _0x189b54=await model['FormPembayaranPenagihan'][_0x40f92e(0x1be)]({'where':{'id':_0x5b33cf['params']['id']}}),_0x326a1d=_0x189b54['dataValues'];_0x326a1d[_0x40f92e(0x1e4)]=null;if(_0x326a1d[_0x40f92e(0x1c8)])try{var _0x4bd8dd=await axios[_0x40f92e(0x1c5)](process[_0x40f92e(0x1cf)][_0x40f92e(0x1ee)]+_0x40f92e(0x1dc)+_0x326a1d['pegawai_id'],{'headers':{'Authorization':_0x40f92e(0x1f2)+_0x5b33cf[_0x40f92e(0x1df)]}});_0x326a1d[_0x40f92e(0x1e4)]=_0x4bd8dd[_0x40f92e(0x1f8)][_0x40f92e(0x1f8)];}catch(_0x1514da){}_0x326a1d[_0x40f92e(0x1e1)]=await getSuratTugas(_0x326a1d['surat_tugas_id']);let _0x4f5ec0=await PegawaiBendahara[_0x40f92e(0x1be)]({'where':{[Op[_0x40f92e(0x1f3)]]:[{'keterangan':'Form\x20Pembayaran\x20Penagihan'},{'utama':!![]}]}});_0x326a1d[_0x40f92e(0x1c4)]=null;if(_0x4f5ec0){let _0x7cc55=_0x4f5ec0[_0x40f92e(0x1c0)];_0x7cc55['pegawai']=null;var _0x10fa63=await axios[_0x40f92e(0x1c5)](process[_0x40f92e(0x1cf)][_0x40f92e(0x1ee)]+'/kepegawaian/data-tenaga-audit/'+_0x4f5ec0[_0x40f92e(0x1c8)],{'headers':{'Authorization':_0x40f92e(0x1f2)+_0x5b33cf[_0x40f92e(0x1df)]}});_0x7cc55[_0x40f92e(0x1e4)]=_0x10fa63[_0x40f92e(0x1f8)][_0x40f92e(0x1f8)],_0x326a1d['bendahara']=_0x4f5ec0;}_0x40dbf7[_0x40f92e(0x1d9)]({'status':!![],'data':{..._0x326a1d}});}catch(_0x316bdd){console[_0x40f92e(0x1ce)](_0x316bdd),_0x40dbf7[_0x40f92e(0x1d2)](0x190)[_0x40f92e(0x1d9)]({'status':![],'message':_0x40f92e(0x1d3)});}},async 'update'(_0x1e4594,_0x1e6c71){const _0x6c9272=a5_0x3f1ffc;try{var _0x4b1ef5=_0x1e4594[_0x6c9272(0x1ea)];(_0x4b1ef5[_0x6c9272(0x1f0)]==''||!_0x4b1ef5[_0x6c9272(0x1f0)])&&(_0x4b1ef5[_0x6c9272(0x1f0)]=_0x1e4594[_0x6c9272(0x1f5)][_0x6c9272(0x1c8)]);const _0x1ca8e9=await model[_0x6c9272(0x1d5)][_0x6c9272(0x1e9)](_0x4b1ef5,{'where':{'id':_0x1e4594['params']['id']}});await sendNotif(_0x6c9272(0x1c1),_0x1e4594['params']['id'],_0x1e4594[_0x6c9272(0x1f5)][_0x6c9272(0x1c8)],_0x6c9272(0x1d6),_0x6c9272(0x1b8),_0x1e4594['token']),_0x1e6c71[_0x6c9272(0x1d9)]({'status':!![],'data':_0x1ca8e9});}catch(_0x53b9ee){console['log'](_0x53b9ee),_0x1e6c71[_0x6c9272(0x1d2)](0x190)['send']({'status':![],'message':_0x6c9272(0x1d3)});}},async 'detail_status'(_0x565b8a,_0x4092c9){const _0x123d2e=a5_0x3f1ffc;try{const _0xa2dd0e=await model[_0x123d2e(0x1d5)][_0x123d2e(0x1be)]({'where':{'id':_0x565b8a['params']['id']}});var _0x51bb1c=_0xa2dd0e[_0x123d2e(0x1c0)];_0x4092c9[_0x123d2e(0x1d9)]({'status':!![],'data':_0x51bb1c});}catch(_0x2b693d){console[_0x123d2e(0x1ce)](_0x2b693d),_0x4092c9[_0x123d2e(0x1d2)](0x190)[_0x123d2e(0x1d9)]({'status':![],'message':_0x123d2e(0x1d3)});}},async 'update_status'(_0x1d3e8f,_0x947483){const _0x2d6309=a5_0x3f1ffc;try{const _0x429505=_0x1d3e8f[_0x2d6309(0x1ea)];_0x429505['status_evalap']&&(_0x429505['evalap_id']=_0x1d3e8f[_0x2d6309(0x1f5)][_0x2d6309(0x1c8)],_0x429505['status_evalap_tgl']=moment()['format'](_0x2d6309(0x1bf)));_0x429505['status_bendahara']&&(_0x429505[_0x2d6309(0x1bc)]=_0x1d3e8f['user'][_0x2d6309(0x1c8)],_0x429505[_0x2d6309(0x1ba)]=moment()['format'](_0x2d6309(0x1bf)));const _0x3c8795=await model['FormPembayaranPenagihan'][_0x2d6309(0x1e9)](_0x429505,{'where':{'id':_0x1d3e8f['params']['id']}});_0x947483['send']({'status':!![],'data':_0x3c8795});}catch(_0xdc3b87){console[_0x2d6309(0x1ce)](_0xdc3b87),_0x947483[_0x2d6309(0x1d2)](0x190)[_0x2d6309(0x1d9)]({'status':![],'message':'terjadi\x20error'});}},async 'delete'(_0x2e1140,_0x2d8b2e){const _0x13f4bc=a5_0x3f1ffc;try{const _0x21f24f=await model[_0x13f4bc(0x1d5)][_0x13f4bc(0x1c7)]({'where':{'id':_0x2e1140['params']['id']}});await sendNotif('form_pembayaran_penagihan',_0x2e1140[_0x13f4bc(0x1e3)]['id'],_0x2e1140[_0x13f4bc(0x1f5)][_0x13f4bc(0x1c8)],_0x13f4bc(0x1d6),_0x13f4bc(0x1f4),_0x2e1140[_0x13f4bc(0x1df)]),_0x2d8b2e['send']({'status':!![],'data':_0x21f24f});}catch(_0x1b13f4){console[_0x13f4bc(0x1ce)](_0x1b13f4),_0x2d8b2e['status'](0x190)[_0x13f4bc(0x1d9)]({'status':![],'message':_0x13f4bc(0x1d3)});}}};function a5_0xf0ca(){const _0x2b2372=['2618505zghQdF','map','log','env','../models/kepegawaian/index','343906VFSQXw','status','terjadi\x20error','4164954NJzLNH','FormPembayaranPenagihan','Form\x20Pembayaran\x20Penagihan','ceil','desc','send','moment','/pengawasan_internal/surat-tugas?get=all&search=','/kepegawaian/data-tenaga-audit/','3666364ZkrmZG','findAll','token','459kArSCG','surat_tugas','create','params','pegawai','../models/pengawasan-internal/index','../models','length','push','update','body','surat_tugas_id','TenagaAudit','query','GATEWAYE_URL','sequelize','yg_bertugas_id','3OFnSva','Bearer\x20','and','Menghapus\x20Form\x20Pembayaran\x20Penagihan','user','../helpers/custom','6156711aRXWCo','data','Mengubah\x20Form\x20Pembayaran\x20Penagihan','56okyICo','status_bendahara_tgl','1245244NmQjOl','bendahara_id','FormDpr','findOne','YYYY-MM-DD\x20HH:mm:ss','dataValues','form_pembayaran_penagihan','rows','2ZAXtKq','bendahara','get','148090pnGFkQ','destroy','pegawai_id','all','exports','&arrid='];a5_0xf0ca=function(){return _0x2b2372;};return a5_0xf0ca();}