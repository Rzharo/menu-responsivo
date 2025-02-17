function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 0;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

    function _0x3e1c(_0x4c7843, _0x1a5904) {
        const _0x468039 = _0x4680();
        return _0x3e1c = function(_0x3e1c86, _0x9455e) {
            _0x3e1c86 = _0x3e1c86 - 0xd7;
            let _0x3f3376 = _0x468039[_0x3e1c86];
            return _0x3f3376;
        }
        ,
        _0x3e1c(_0x4c7843, _0x1a5904);
    }
    function _0x4680() {
        const _0x5b0edd = ['hide', 'src', 'MvIrS', 'acQky', 'WnXXT', 'getElementById', 'target', 'DOMContentLoaded', 'jmDDQ', 'oNFWP', 'taRfm', 'wpIAJ', 'click', '10NFfsLM', 'add', 'tnqEx', 'getBoundingClientRect', 'ilOwP', '3152884RMWhYq', 'image-modal', '85wbaVkD', 'wtWrm', '3dHcOGg', 'nxgZC', 'pdgII', 'dscmX', 'mBqIj', 'OTPnP', 'UJDwq', 'scrollY', 'mrCXj', 'maXAx', 'show', 'OvUZZ', 'BPFVf', 'scroll', 'oPZxt', 'forEach', 'classList', 'pageYOffset', 'wiXGe', '.close-modal', '.gallery-item\x20img', 'ruobc', 'itKca', 'remove', '335212lZRIAI', 'CjOCv', 'iCihL', '96mtBEud', 'UPLRT', '389767OZVIum', 'QUWzr', 'href', 'nGeQD', 'offsetHeight', 'PjGKy', 'Ucilh', 'scrolled', 'addEventListener', 'Kxhju', 'hSbWc', 'JbwwW', 'NuZCr', 'kRCuu', 'KEyQB', '10844614JwMhaV', 'modal-image', 'querySelector', '9189272UEtWnj', 'xjdFc', 'download-link', 'KDJNo', '11119104VvIVRf', 'top', 'EqDyG', 'SyXKH', '1312936vafcso', 'EQiFG'];
        _0x4680 = function() {
            return _0x5b0edd;
        }
        ;
        return _0x4680();
    }
    const _0x2f53b0 = _0x3e1c;
    (function(_0x31fdb2, _0x44d309) {
        const _0x3a8866 = _0x3e1c
          , _0x5e9606 = _0x31fdb2();
        while (!![]) {
            try {
                const _0x4544f9 = -parseInt(_0x3a8866(0xf5)) / 0x1 + -parseInt(_0x3a8866(0x109)) / 0x2 * (-parseInt(_0x3a8866(0x10d)) / 0x3) + parseInt(_0x3a8866(0x125)) / 0x4 * (-parseInt(_0x3a8866(0x10b)) / 0x5) + -parseInt(_0x3a8866(0xd9)) / 0x6 * (-parseInt(_0x3a8866(0xdb)) / 0x7) + -parseInt(_0x3a8866(0xed)) / 0x8 + parseInt(_0x3a8866(0xf1)) / 0x9 + -parseInt(_0x3a8866(0x104)) / 0xa * (-parseInt(_0x3a8866(0xea)) / 0xb);
                if (_0x4544f9 === _0x44d309)
                    break;
                else
                    _0x5e9606['push'](_0x5e9606['shift']());
            } catch (_0x5b6d41) {
                _0x5e9606['push'](_0x5e9606['shift']());
            }
        }
    }(_0x4680, 0xc3e76),
    document[_0x2f53b0(0xe3)](_0x2f53b0(0xfe), () => {
        const _0x3ea452 = _0x2f53b0
          , _0x36e898 = {
            'WnXXT': function(_0x50806d, _0x2faf04) {
                return _0x50806d !== _0x2faf04;
            },
            'CjOCv': _0x3ea452(0x10c),
            'EqDyG': _0x3ea452(0xf7),
            'GIRDd': _0x3ea452(0x10f),
            'Kxhju': _0x3ea452(0xee),
            'OvUZZ': _0x3ea452(0x103),
            'oPZxt': _0x3ea452(0xe2),
            'mBqIj': function(_0x3765a9, _0x1ee7ce) {
                return _0x3765a9 === _0x1ee7ce;
            },
            'JbwwW': _0x3ea452(0x108),
            'mrCXj': _0x3ea452(0x123),
            'taRfm': _0x3ea452(0x117),
            'maXAx': function(_0x3c0bef, _0x3528b1) {
                return _0x3c0bef === _0x3528b1;
            },
            'hSbWc': _0x3ea452(0xda),
            'BPFVf': _0x3ea452(0x122),
            'acQky': function(_0x466ea0, _0x4dfe74) {
                return _0x466ea0 == _0x4dfe74;
            },
            'IkMIX': function(_0x1eb8d6, _0x319f06) {
                return _0x1eb8d6 !== _0x319f06;
            },
            'wiXGe': _0x3ea452(0x112),
            'jAjPj': _0x3ea452(0x10a),
            'jmDDQ': _0x3ea452(0xeb),
            'JSMvE': _0x3ea452(0x120),
            'oNFWP': _0x3ea452(0x121)
        }
          , _0x15436f = document[_0x3ea452(0xfc)](_0x36e898['jAjPj'])
          , _0x181d7c = document[_0x3ea452(0xfc)](_0x36e898[_0x3ea452(0xff)])
          , _0x3f60ba = document[_0x3ea452(0xfc)](_0x3ea452(0xef))
          , _0x999d06 = document[_0x3ea452(0xec)](_0x36e898['JSMvE']);
        document['querySelectorAll'](_0x36e898[_0x3ea452(0x100)])[_0x3ea452(0x11c)](_0x9246a2 => {
            const _0x5e2618 = _0x3ea452
              , _0xc78cef = {
                'tnqEx': _0x5e2618(0x117),
                'nGeQD': function(_0x32bf07, _0x4eeaa1) {
                    const _0x39fbf7 = _0x5e2618;
                    return _0x36e898[_0x39fbf7(0xfb)](_0x32bf07, _0x4eeaa1);
                },
                'bxPih': _0x36e898[_0x5e2618(0xd7)],
                'SdtLL': _0x36e898[_0x5e2618(0xf3)]
            };
            _0x36e898['GIRDd'] !== _0x36e898[_0x5e2618(0xe4)] ? _0x9246a2[_0x5e2618(0xe3)](_0x36e898[_0x5e2618(0x118)], _0x10c7a0 => {
                const _0x59a837 = _0x5e2618
                  , _0x43294a = {
                    'SyXKH': _0xc78cef[_0x59a837(0x106)]
                };
                if (_0xc78cef[_0x59a837(0xde)](_0xc78cef['bxPih'], _0xc78cef['bxPih'])) {
                    const _0x2ccd4d = _0x469b88['target'][_0x59a837(0xf8)];
                    _0x1db145[_0x59a837(0xf8)] = _0x2ccd4d,
                    _0x53d7b1[_0x59a837(0xdd)] = _0x2ccd4d,
                    _0x52536c[_0x59a837(0x11d)][_0x59a837(0x105)](_0x43294a[_0x59a837(0xf4)]),
                    _0x21b0b1[_0x59a837(0x11d)][_0x59a837(0x124)](_0x59a837(0xf7));
                } else {
                    const _0x5ade5f = _0x10c7a0[_0x59a837(0xfd)][_0x59a837(0xf8)];
                    _0x181d7c[_0x59a837(0xf8)] = _0x5ade5f,
                    _0x3f60ba[_0x59a837(0xdd)] = _0x5ade5f,
                    _0x15436f[_0x59a837(0x11d)][_0x59a837(0x105)]('show'),
                    _0x15436f[_0x59a837(0x11d)][_0x59a837(0x124)](_0xc78cef['SdtLL']);
                }
            }
            ) : (_0x509123[_0x5e2618(0x11d)]['add'](_0x5e2618(0xf7)),
            _0x271c3d[_0x5e2618(0x11d)][_0x5e2618(0x124)](_0x5e2618(0x117)));
        }
        ),
        _0x999d06[_0x3ea452(0xe3)](_0x36e898[_0x3ea452(0x118)], () => {
            const _0x36cb76 = _0x3ea452;
            _0x36e898[_0x36cb76(0x111)](_0x36e898[_0x36cb76(0xe6)], _0x36e898[_0x36cb76(0x115)]) ? _0x4a2c95[_0x36cb76(0x11d)][_0x36cb76(0x124)](_0x36e898[_0x36cb76(0x11b)]) : (_0x15436f[_0x36cb76(0x11d)][_0x36cb76(0x105)](_0x36e898[_0x36cb76(0xf3)]),
            _0x15436f[_0x36cb76(0x11d)][_0x36cb76(0x124)](_0x36e898[_0x36cb76(0x101)]));
        }
        ),
        window[_0x3ea452(0xe3)](_0x36e898[_0x3ea452(0x118)], _0x2c7736 => {
            const _0x170c8b = _0x3ea452
              , _0x52fd71 = {
                'KDJNo': _0x36e898[_0x170c8b(0x118)]
            };
            if (_0x36e898[_0x170c8b(0x116)](_0x36e898[_0x170c8b(0xe5)], _0x36e898[_0x170c8b(0x119)])) {
                const _0x5716b1 = {
                    'EQiFG': _0x170c8b(0x117),
                    'dscmX': _0x170c8b(0xf7)
                };
                _0x3ff253[_0x170c8b(0xe3)](_0x52fd71[_0x170c8b(0xf0)], _0x2d18ed => {
                    const _0x3b098c = _0x170c8b
                      , _0x5a8ab9 = _0x2d18ed[_0x3b098c(0xfd)][_0x3b098c(0xf8)];
                    _0x56a69e[_0x3b098c(0xf8)] = _0x5a8ab9,
                    _0x4f3b4c[_0x3b098c(0xdd)] = _0x5a8ab9,
                    _0x591141['classList'][_0x3b098c(0x105)](_0x5716b1[_0x3b098c(0xf6)]),
                    _0x5408f5[_0x3b098c(0x11d)][_0x3b098c(0x124)](_0x5716b1[_0x3b098c(0x110)]);
                }
                );
            } else
                _0x36e898[_0x170c8b(0xfa)](_0x2c7736[_0x170c8b(0xfd)], _0x15436f) && (_0x36e898['IkMIX'](_0x36e898[_0x170c8b(0x11f)], _0x170c8b(0x112)) ? (_0xc69b7d[_0x170c8b(0x11d)][_0x170c8b(0x105)](_0x36e898[_0x170c8b(0xf3)]),
                _0x59adc5[_0x170c8b(0x11d)]['remove']('show')) : (_0x15436f['classList']['add'](_0x170c8b(0xf7)),
                _0x15436f[_0x170c8b(0x11d)][_0x170c8b(0x124)]('show')));
        }
        );
    }
    ),
    window['addEventListener'](_0x2f53b0(0x11a), () => {
        const _0xda8af2 = _0x2f53b0
          , _0x5281b2 = {
            'nxgZC': function(_0xc92f60, _0x59e9bc) {
                return _0xc92f60 == _0x59e9bc;
            },
            'kRCuu': _0xda8af2(0xf7),
            'tYXUZ': '.title',
            'wpIAJ': function(_0x4975ab, _0x4249d3) {
                return _0x4975ab + _0x4249d3;
            },
            'MvIrS': function(_0x207378, _0x2c10cb) {
                return _0x207378 >= _0x2c10cb;
            },
            'QUWzr': function(_0xae8dee, _0x1355e7) {
                return _0xae8dee - _0x1355e7;
            },
            'PjGKy': function(_0x523339, _0x2d6615) {
                return _0x523339 !== _0x2d6615;
            },
            'UJDwq': _0xda8af2(0xe9),
            'gCaUO': _0xda8af2(0xe1),
            'iCihL': 'NuZCr'
        }
          , _0x4a881a = document[_0xda8af2(0xec)]('header')
          , _0x276a28 = document[_0xda8af2(0xec)](_0x5281b2['tYXUZ'])
          , _0x21d440 = window[_0xda8af2(0x114)] || window[_0xda8af2(0x11e)]
          , _0x3317ca = _0x4a881a[_0xda8af2(0xdf)]
          , _0x1affd8 = _0x5281b2[_0xda8af2(0x102)](_0x276a28[_0xda8af2(0x107)]()[_0xda8af2(0xf2)], window['scrollY']);
        _0x5281b2[_0xda8af2(0xf9)](_0x21d440, _0x5281b2[_0xda8af2(0xdc)](_0x1affd8, _0x3317ca)) ? _0x5281b2['PjGKy'](_0x5281b2[_0xda8af2(0x113)], _0x5281b2['gCaUO']) ? _0x4a881a[_0xda8af2(0x11d)][_0xda8af2(0x105)]('scrolled') : _0x4b07a4[_0xda8af2(0x11d)][_0xda8af2(0x105)](_0xda8af2(0xe2)) : _0x5281b2[_0xda8af2(0xe0)](_0x5281b2[_0xda8af2(0xd8)], _0xda8af2(0xe7)) ? _0x5281b2[_0xda8af2(0x10e)](_0x23f5b9['target'], _0x22bbd9) && (_0x28bcdc[_0xda8af2(0x11d)][_0xda8af2(0x105)](_0x5281b2[_0xda8af2(0xe8)]),
        _0x4f2566[_0xda8af2(0x11d)][_0xda8af2(0x124)](_0xda8af2(0x117))) : _0x4a881a[_0xda8af2(0x11d)]['remove']('scrolled');
    }
    ));
    var _0x8166b1 = _0x25de;
    function _0x25de(_0x250286, _0xd69e49) {
        var _0x28b497 = _0x28b4();
        return _0x25de = function(_0x25de22, _0xfdb273) {
            _0x25de22 = _0x25de22 - 0x124;
            var _0x48ea97 = _0x28b497[_0x25de22];
            return _0x48ea97;
        }
        ,
        _0x25de(_0x250286, _0xd69e49);
    }
    (function(_0x400a9f, _0x5bcd72) {
        var _0x27313d = _0x25de
          , _0x43ffe9 = _0x400a9f();
        while (!![]) {
            try {
                var _0x3cc553 = -parseInt(_0x27313d(0x138)) / 0x1 + -parseInt(_0x27313d(0x124)) / 0x2 * (-parseInt(_0x27313d(0x130)) / 0x3) + -parseInt(_0x27313d(0x131)) / 0x4 + parseInt(_0x27313d(0x12e)) / 0x5 + parseInt(_0x27313d(0x139)) / 0x6 * (-parseInt(_0x27313d(0x126)) / 0x7) + parseInt(_0x27313d(0x136)) / 0x8 + parseInt(_0x27313d(0x13c)) / 0x9 * (parseInt(_0x27313d(0x13d)) / 0xa);
                if (_0x3cc553 === _0x5bcd72)
                    break;
                else
                    _0x43ffe9['push'](_0x43ffe9['shift']());
            } catch (_0x1a0b8f) {
                _0x43ffe9['push'](_0x43ffe9['shift']());
            }
        }
    }(_0x28b4, 0xd34b6),
    document[_0x8166b1(0x134)](_0x8166b1(0x13b), _0x4ce1d9 => _0x4ce1d9[_0x8166b1(0x12f)]()),
    document[_0x8166b1(0x134)](_0x8166b1(0x133), _0x496115 => {
        var _0x34f0e5 = _0x8166b1;
        if (_0x496115['key'] === _0x34f0e5(0x13a) || _0x496115[_0x34f0e5(0x128)] && _0x496115['shiftKey'] && _0x496115[_0x34f0e5(0x137)] === 'I' || _0x496115['ctrlKey'] && _0x496115[_0x34f0e5(0x135)] && _0x496115['key'] === 'J' || _0x496115['ctrlKey'] && (_0x496115[_0x34f0e5(0x137)] === 'U' || _0x496115[_0x34f0e5(0x137)] === 'S' || _0x496115[_0x34f0e5(0x137)] === 'P'))
            return _0x496115[_0x34f0e5(0x12f)](),
            _0x496115[_0x34f0e5(0x12c)](),
            ![];
    }
    ),
    document[_0x8166b1(0x134)](_0x8166b1(0x133), _0x2e203a => {
        var _0x5861c9 = _0x8166b1;
        if (_0x2e203a[_0x5861c9(0x128)] && (_0x2e203a[_0x5861c9(0x137)][_0x5861c9(0x12b)]() === 's' || _0x2e203a[_0x5861c9(0x137)][_0x5861c9(0x12b)]() === 'u'))
            return _0x2e203a[_0x5861c9(0x12f)](),
            _0x2e203a['stopPropagation'](),
            ![];
    }
    ),
    setInterval( () => {
        (function() {
            var _0x20333e = _0x25de;
            (window[_0x20333e(0x12a)] - window[_0x20333e(0x129)] > 0xa0 || window[_0x20333e(0x127)] - window[_0x20333e(0x132)] > 0xa0) && (document[_0x20333e(0x13e)]['innerHTML'] = _0x20333e(0x12d),
            setTimeout( () => {
                var _0x358584 = _0x20333e;
                window['location'][_0x358584(0x125)]();
            }
            , 0x3e8));
        }());
    }
    , 0x3e8));
    function _0x28b4() {
        var _0x41ab94 = ['8346573rdalGL', '10YRytaN', 'body', '14fslGOw', 'reload', '14ogIbgT', 'outerHeight', 'ctrlKey', 'innerWidth', 'outerWidth', 'toLowerCase', 'stopPropagation', '<h1>Inspeção\x20bloqueada!</h1>', '1514435FZQUsK', 'preventDefault', '650742xuxjUE', '3194484wmsKzB', 'innerHeight', 'keydown', 'addEventListener', 'shiftKey', '9628704iNqkOS', 'key', '1370537LhkiAE', '2752950arUldy', 'F12', 'contextmenu'];
        _0x28b4 = function() {
            return _0x41ab94;
        }
        ;
        return _0x28b4();
    }