const a5_0x1786f0=a5_0x6b4c;(function(_0x4e926e,_0x5bb15d){const _0x249d5a=a5_0x6b4c,_0x49fbe6=_0x4e926e();while(!![]){try{const _0x25d6c0=-parseInt(_0x249d5a(0xc0))/0x1+-parseInt(_0x249d5a(0xc3))/0x2*(parseInt(_0x249d5a(0xbe))/0x3)+-parseInt(_0x249d5a(0xe3))/0x4*(parseInt(_0x249d5a(0xf1))/0x5)+parseInt(_0x249d5a(0xbc))/0x6+-parseInt(_0x249d5a(0xd7))/0x7+parseInt(_0x249d5a(0xcd))/0x8*(-parseInt(_0x249d5a(0xe5))/0x9)+parseInt(_0x249d5a(0xdd))/0xa;if(_0x25d6c0===_0x5bb15d)break;else _0x49fbe6['push'](_0x49fbe6['shift']());}catch(_0x1bde12){_0x49fbe6['push'](_0x49fbe6['shift']());}}}(a5_0x5a41,0x6424b));function a5_0x5a41(){const _0x491bc2=['yg_bertugas_id','518748DpwCNv','status_evalap_tgl','572126pfMTHI','findAndCountAll','Bearer\x20','8WCRPmA','../models/index','dataValues','bendahara_id','status','update','status_bendahara','createdAt','pegawai','../models','532096DCABRP','surat_tugas','findOne','desc','bendahara','FormDpr','/kepegawaian/data-tenaga-audit/','token','and','GATEWAYE_URL','5339789tdGLiy','status_bendahara_tgl','length','create','&arrid=','/pengawasan_internal/surat-tugas?get=all&search=','32026500iKoSCN','form_pembayaran_penagihan','all','get','ceil','user','372224BFobyw','surat_tugas_id','63WExewT','TenagaAudit','query','map','../models/pengawasan-internal/index','sequelize','YYYY-MM-DD\x20HH:mm:ss','Form\x20Pembayaran\x20Penagihan','data','FormPembayaranPenagihan','moment','status_evalap','40gySRGr','pegawai_id','params','format','push','../helpers/custom','env','log','send','terjadi\x20error','findAll','2665116QnNPJM'];a5_0x5a41=function(){return _0x491bc2;};return a5_0x5a41();}function a5_0x6b4c(_0x5cd87f,_0x48f13c){const _0x5a416b=a5_0x5a41();return a5_0x6b4c=function(_0x6b4c8b,_0x24758b){_0x6b4c8b=_0x6b4c8b-0xb9;let _0x94adbb=_0x5a416b[_0x6b4c8b];return _0x94adbb;},a5_0x6b4c(_0x5cd87f,_0x48f13c);}const {Op}=require(a5_0x1786f0(0xea)),model=require(a5_0x1786f0(0xc4)),{default:axios}=require('axios'),moment=require(a5_0x1786f0(0xef)),{sendNotif,getSuratTugas}=require(a5_0x1786f0(0xf6)),{PegawaiBendahara}=require(a5_0x1786f0(0xcc)),modelPengawasan=require(a5_0x1786f0(0xe9)),modelKepegawaian=require('../models/kepegawaian/index'),getPaginationTable=(_0x4e194a,_0x1a19ca)=>{const _0x181b5b=_0x1a19ca?+_0x1a19ca:0xa,_0x46bd54=_0x4e194a?Math['ceil'](_0x4e194a-0x1)*_0x181b5b:0x0;return{'limit':_0x181b5b,'offset':_0x46bd54};},getPagingData=(_0x161b3b,_0x275ebf,_0x549b05)=>{const {count:_0x5eba3b,rows:_0x4ff026}=_0x161b3b,_0x50b269=_0x275ebf?+_0x275ebf:0x0,_0x4ee649=Math['ceil'](_0x5eba3b/_0x549b05);return{'totalItems':_0x5eba3b,'data':_0x4ff026,'totalPages':_0x4ee649,'currentPage':_0x50b269};},getPagination=(_0x444f4f,_0xc5522d)=>{const _0xb0b1b7=a5_0x1786f0,_0x34c6ce=_0xc5522d?+_0xc5522d:0xa,_0x4b61e4=_0x444f4f?Math[_0xb0b1b7(0xe1)](_0x444f4f-0x1)*_0x34c6ce:0x0;return{'limit':_0x34c6ce,'offset':_0x4b61e4};};module['exports']={async 'index'(_0x3cc06e,_0x8acbaf){const _0x515557=a5_0x1786f0;try{const {page:page=0x1,size:size=0xa,sortby:sortby=_0x515557(0xca),orderby:orderby=_0x515557(0xd0),search:_0x31858d,byuser:_0x24483e}=_0x3cc06e[_0x515557(0xe7)],{limit:_0x65271f,offset:_0x462957}=getPagination(page,size);let _0x4d744a={};if(_0x31858d){const _0x5d881e=await model[_0x515557(0xd2)][_0x515557(0xbb)]({'attributes':[_0x515557(0xe4)],'group':[_0x515557(0xe4)]});let _0x5eacdf=[];for(let _0x1ea849=0x0;_0x1ea849<_0x5d881e[_0x515557(0xd9)];_0x1ea849++){const _0x189668=_0x5d881e[_0x1ea849]['dataValues'];_0x5eacdf[_0x515557(0xf5)](_0x189668['surat_tugas_id']);}const _0x4a45a6=await model['FormDpr'][_0x515557(0xbb)]({'attributes':[_0x515557(0xf2)],'group':[_0x515557(0xf2)]});let _0x2796d7=[];for(let _0x3fe06e=0x0;_0x3fe06e<_0x4a45a6['length'];_0x3fe06e++){const _0x59da15=_0x4a45a6[_0x3fe06e]['dataValues'];_0x2796d7[_0x515557(0xf5)](_0x59da15[_0x515557(0xf2)]);}const [_0x569e13,_0x40c69b]=await Promise[_0x515557(0xdf)]([axios[_0x515557(0xe0)](process[_0x515557(0xf7)]['GATEWAYE_URL']+_0x515557(0xdc)+_0x31858d+_0x515557(0xdb)+_0x5eacdf,{'headers':{'Authorization':_0x515557(0xc2)+_0x3cc06e[_0x515557(0xd4)]}}),axios['get'](process[_0x515557(0xf7)][_0x515557(0xd6)]+'/kepegawaian/data-tenaga-audit?get=all&search='+_0x31858d+_0x515557(0xdb)+_0x2796d7,{'headers':{'Authorization':_0x515557(0xc2)+_0x3cc06e[_0x515557(0xd4)]}})]),_0x4df404=_0x569e13[_0x515557(0xed)][_0x515557(0xed)],_0x2916a2=_0x40c69b['data']['data'];let _0x382bcd=[];for(let _0x1adadc=0x0;_0x1adadc<_0x4df404[_0x515557(0xd9)];_0x1adadc++){const _0x178180=_0x4df404[_0x1adadc];_0x382bcd['push'](_0x178180['id']);}_0x382bcd[_0x515557(0xd9)]>0x0&&(_0x4d744a['surat_tugas_id']={[Op['in']]:_0x382bcd});let _0xa936dc=[];for(let _0x563096=0x0;_0x563096<_0x2916a2[_0x515557(0xd9)];_0x563096++){const _0x17c7de=_0x2916a2[_0x563096];_0xa936dc['push'](_0x17c7de['id']);}_0xa936dc[_0x515557(0xd9)]>0x0&&(_0x4d744a['pegawai_id']={[Op['in']]:_0xa936dc});}_0x3cc06e[_0x515557(0xe2)]['role_id']!==0x1&&_0x3cc06e['query']['get']!='all'&&(_0x4d744a[_0x515557(0xf2)]=_0x3cc06e[_0x515557(0xe2)]['pegawai_id']);const _0x405226=await model['FormPembayaranPenagihan'][_0x515557(0xc1)]({'where':_0x4d744a,'order':[[sortby,orderby]],'limit':_0x65271f,'offset':_0x462957}),_0x3a5b18=await Promise['all'](_0x405226['rows'][_0x515557(0xe8)](async _0x184bfc=>{const _0x3bca0b=_0x515557,_0x191461=_0x184bfc[_0x3bca0b(0xc5)];_0x191461[_0x3bca0b(0xcb)]=null;if(_0x191461[_0x3bca0b(0xf2)])try{const _0x2779e5=await modelKepegawaian[_0x3bca0b(0xe6)][_0x3bca0b(0xcf)]({'where':{'id':_0x191461['pegawai_id']}});_0x191461[_0x3bca0b(0xcb)]=_0x2779e5;}catch(_0x2ff63b){console[_0x3bca0b(0xf8)](_0x2ff63b);}_0x191461[_0x3bca0b(0xce)]=null;if(_0x191461[_0x3bca0b(0xe4)])try{const _0x4a8d4c=await modelPengawasan['SuratTugas'][_0x3bca0b(0xcf)]({'where':{'id':_0x191461['surat_tugas_id']}});_0x191461[_0x3bca0b(0xce)]=_0x4a8d4c;}catch(_0x309c29){}return _0x191461;})),_0xe640cb=getPagingData(_0x405226,page,_0x65271f);_0x8acbaf[_0x515557(0xb9)]({'status':!![],..._0xe640cb,'data':_0x3a5b18});}catch(_0x497368){console['log'](_0x497368),_0x8acbaf[_0x515557(0xc7)](0x190)[_0x515557(0xb9)]({'status':![],'message':_0x515557(0xba)});}},async 'add'(_0x12c490,_0x546fe4){const _0x13a71e=a5_0x1786f0;try{var _0x410c5c=_0x12c490['body'];(_0x410c5c['yg_bertugas_id']==''||!_0x410c5c['yg_bertugas_id'])&&(_0x410c5c['yg_bertugas_id']=_0x12c490[_0x13a71e(0xe2)][_0x13a71e(0xf2)]);const _0x26ee20=await model['FormPembayaranPenagihan'][_0x13a71e(0xda)](_0x410c5c);return await sendNotif(_0x13a71e(0xde),_0x26ee20['id'],_0x12c490['user'][_0x13a71e(0xf2)],_0x13a71e(0xec),'Menghapus\x20Form\x20Pembayaran\x20Penagihan',_0x12c490[_0x13a71e(0xd4)]),_0x546fe4[_0x13a71e(0xc7)](0xc8)[_0x13a71e(0xb9)]({'status':!![],'data':_0x26ee20});}catch(_0x1a6882){return console[_0x13a71e(0xf8)](_0x1a6882),_0x546fe4[_0x13a71e(0xc7)](0x190)[_0x13a71e(0xb9)]({'status':![],'message':_0x13a71e(0xba)});}},async 'detail'(_0x19c099,_0x473635){const _0x53c50d=a5_0x1786f0;try{const _0x12e98f=await model[_0x53c50d(0xee)][_0x53c50d(0xcf)]({'where':{'id':_0x19c099[_0x53c50d(0xf3)]['id']}}),_0x42b884=_0x12e98f[_0x53c50d(0xc5)];_0x42b884[_0x53c50d(0xcb)]=null;if(_0x42b884[_0x53c50d(0xf2)])try{var _0x858b8=await axios['get'](process['env'][_0x53c50d(0xd6)]+_0x53c50d(0xd3)+_0x42b884[_0x53c50d(0xf2)],{'headers':{'Authorization':_0x53c50d(0xc2)+_0x19c099['token']}});_0x42b884[_0x53c50d(0xcb)]=_0x858b8['data']['data'];}catch(_0x646b60){}_0x42b884[_0x53c50d(0xce)]=await getSuratTugas(_0x42b884[_0x53c50d(0xe4)]);let _0x366179=await PegawaiBendahara[_0x53c50d(0xcf)]({'where':{[Op[_0x53c50d(0xd5)]]:[{'keterangan':_0x53c50d(0xec)},{'utama':!![]}]}});_0x42b884[_0x53c50d(0xd1)]=null;if(_0x366179){let _0x1ea29b=_0x366179[_0x53c50d(0xc5)];_0x1ea29b['pegawai']=null;var _0x291f17=await axios[_0x53c50d(0xe0)](process[_0x53c50d(0xf7)]['GATEWAYE_URL']+_0x53c50d(0xd3)+_0x366179[_0x53c50d(0xf2)],{'headers':{'Authorization':'Bearer\x20'+_0x19c099[_0x53c50d(0xd4)]}});_0x1ea29b[_0x53c50d(0xcb)]=_0x291f17[_0x53c50d(0xed)]['data'],_0x42b884[_0x53c50d(0xd1)]=_0x366179;}_0x473635[_0x53c50d(0xb9)]({'status':!![],'data':{..._0x42b884}});}catch(_0x1e77fc){console[_0x53c50d(0xf8)](_0x1e77fc),_0x473635[_0x53c50d(0xc7)](0x190)[_0x53c50d(0xb9)]({'status':![],'message':_0x53c50d(0xba)});}},async 'update'(_0x33b013,_0x1e1984){const _0x158bda=a5_0x1786f0;try{var _0x30aea7=_0x33b013['body'];(_0x30aea7[_0x158bda(0xbd)]==''||!_0x30aea7[_0x158bda(0xbd)])&&(_0x30aea7[_0x158bda(0xbd)]=_0x33b013['user'][_0x158bda(0xf2)]);const _0x3a80f5=await model[_0x158bda(0xee)]['update'](_0x30aea7,{'where':{'id':_0x33b013['params']['id']}});await sendNotif(_0x158bda(0xde),_0x33b013[_0x158bda(0xf3)]['id'],_0x33b013[_0x158bda(0xe2)][_0x158bda(0xf2)],_0x158bda(0xec),'Mengubah\x20Form\x20Pembayaran\x20Penagihan',_0x33b013[_0x158bda(0xd4)]),_0x1e1984[_0x158bda(0xb9)]({'status':!![],'data':_0x3a80f5});}catch(_0x4c2897){console[_0x158bda(0xf8)](_0x4c2897),_0x1e1984[_0x158bda(0xc7)](0x190)[_0x158bda(0xb9)]({'status':![],'message':_0x158bda(0xba)});}},async 'detail_status'(_0xe26cfe,_0xf0dbf3){const _0x37c476=a5_0x1786f0;try{const _0x223c57=await model['FormPembayaranPenagihan'][_0x37c476(0xcf)]({'where':{'id':_0xe26cfe[_0x37c476(0xf3)]['id']}});var _0x50e01b=_0x223c57['dataValues'];_0xf0dbf3['send']({'status':!![],'data':_0x50e01b});}catch(_0xeff28f){console[_0x37c476(0xf8)](_0xeff28f),_0xf0dbf3['status'](0x190)['send']({'status':![],'message':_0x37c476(0xba)});}},async 'update_status'(_0x8ed4b6,_0x328dc6){const _0x2fc16c=a5_0x1786f0;try{const _0x4d553b=_0x8ed4b6['body'];_0x4d553b[_0x2fc16c(0xf0)]&&(_0x4d553b['evalap_id']=_0x8ed4b6[_0x2fc16c(0xe2)][_0x2fc16c(0xf2)],_0x4d553b[_0x2fc16c(0xbf)]=moment()['format']('YYYY-MM-DD\x20HH:mm:ss'));_0x4d553b[_0x2fc16c(0xc9)]&&(_0x4d553b[_0x2fc16c(0xc6)]=_0x8ed4b6[_0x2fc16c(0xe2)][_0x2fc16c(0xf2)],_0x4d553b[_0x2fc16c(0xd8)]=moment()[_0x2fc16c(0xf4)](_0x2fc16c(0xeb)));const _0x5d6a9b=await model[_0x2fc16c(0xee)][_0x2fc16c(0xc8)](_0x4d553b,{'where':{'id':_0x8ed4b6['params']['id']}});_0x328dc6[_0x2fc16c(0xb9)]({'status':!![],'data':_0x5d6a9b});}catch(_0x203833){console['log'](_0x203833),_0x328dc6[_0x2fc16c(0xc7)](0x190)[_0x2fc16c(0xb9)]({'status':![],'message':_0x2fc16c(0xba)});}},async 'delete'(_0x2b6ee8,_0x301242){const _0x1ecb64=a5_0x1786f0;try{const _0x35db09=await model[_0x1ecb64(0xee)]['destroy']({'where':{'id':_0x2b6ee8[_0x1ecb64(0xf3)]['id']}});await sendNotif(_0x1ecb64(0xde),_0x2b6ee8[_0x1ecb64(0xf3)]['id'],_0x2b6ee8[_0x1ecb64(0xe2)]['pegawai_id'],_0x1ecb64(0xec),'Menghapus\x20Form\x20Pembayaran\x20Penagihan',_0x2b6ee8['token']),_0x301242[_0x1ecb64(0xb9)]({'status':!![],'data':_0x35db09});}catch(_0x45a5fe){console[_0x1ecb64(0xf8)](_0x45a5fe),_0x301242[_0x1ecb64(0xc7)](0x190)['send']({'status':![],'message':_0x1ecb64(0xba)});}}};