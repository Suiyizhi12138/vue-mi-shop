<template>
  <div class="safe-login-page">
    <div class="content-section">
      <div class="section-head">
        <h2 class="section-title">登录方式</h2>
      </div>
      <div class="section-list">
        <div class="list-item item-phone" @click="verifyPhone">
          <div class="item-left" >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABAlBMVEUAAABOp/91u/8slv9crf9tuP8ymf9zuv85nf9wuf86nP8vlv9crv+RyP+azf+22v+Hxf97v/9vuP+12v85m/1Opf2Vy/+Vyv9HovyEw/+x2P9yuP4zmP1FoPyCwP9ns/4zl/xXqvw2m/4vlfw2mfw7nP06m/6XzP85m/2n0/9msf1Bnvyazv88nf+z2f9brP2t1v8gjfqu1/8vlfxyuP+g0P+Oyf80mP2Dw/+i0f+MxP6j0v8/nvyUyv8ijvxPpv42l/yTyv+12/+Ewf9UqP1kr/0ijvs/nv1Uqf5gr/5LpP1xt/80mfyAwP+IxP8hjvtptP56vP8sk/uk0v+YzP+v1v9dxwRGAAAAR3RSTlMAMS8xDScpPSAZShhL/WfgbR5t/ubl6eOyS+/kpujk5N+zQ/LWl3he976zq5E49ebg3cm2tKWJhEPi4tPFu6NlW1HTtp3Py2ZngH4AAANRSURBVEjHldR/VxJBFMZxdp3dZlm1KCwxUeN3gWWaqWmmZaEiCojv/630zGWmu7vXQB7+EI98/M7unkPu8amoEAQ+LQgKkco9dUpFRK2d8Eipp1HjxAKZl7YgneOF6TxVlXpqXQkqvJo/yxNxYefW8k7Nvm/Szq9VlPr7s+ymnjwKEvLwvNlcTq15XjKedSqctKXO7s/nmf3cXxZPjC3vsLP78ZXZxzXa5P3OftO2PczXrFMXfA77gK3tvDfbXXugHXcOnQX2o0fDz5o7Dw/32PF+s4QtH9/TjvZLFnrm5790IYWXd/DR8Xj8+nvnK9Z5g/f0a4mk/QeB5jDv8MUR6JLZa9rSLc1gH8yW6Z7JR/ziaGw/v4Thbb8/HA77G78WPTfD8bA5zPjNGACDJjvsmRH2Xdm3NzwSeMnEjMbIDgaD3tsv6TLSBvsCTw5KI3t1dTUA5jJxYFUQ2ITdemSxzWwZ586e2rO45zYw9hJYlHWUesgeRnjoICQodrX5IVP2Qp0LAudojEmSpQHbrFvgMJ+IsLFMaZ+4nMQelix/ux2SZXp9ff0IDsNcQFUuA/fZWiox6Zzvi3JfWOzTuyRewMvzgCmYKG8Ap2m3271eYWwgLRdkyy83hj2+WqKMF+hly7jmIHXNhAfpLI0wBJdDg0UZp+asmyyHOqdlGadOZ29uDM6ny4RF+W3P2a6z0GVgUY40lxM4SWnl1WxZxzmlRRmXzCd2K65myvQFGjFlbGmrZdwIA86UF2L6GrKM8aXtFmtbVVAzWQ4NVjqLbbh1Um8c7FVHoztsZLDt0kKtDKa0+6/AmxYX62eed1CrMk5YhIGhQ49H2FjcogY+3tir3jEmZjGsmQ5RdK/tH8B0l6vrPyr5eg3YbKudB2GrjRRXvfgbp77BWjVc80lrNCnX6pUk1jZMT4vTixcrE9ztlldWyt2bCd4722Y6udUyjXNfnNS2sGLZ4OLWZ+zPXkOE3eKQL9tbyDfq62bt9upqu72+fnp6enAGK8NOuzD4dqWSz6yyLSxPxaErg08fPeK01tCT8kyr2bImOaflk4czJZ95fs1WLtaztI4F4vhUHmqRFffNckFDkRWY6nNX2as41jhAaBmSOo4V21lTllv6H/gX/iDsufc2BpYAAAAASUVORK5CYII="
              alt
            />
            安全手机
          </div>
          <div class="item-right">
            <span v-if="true">{{"+86 150****6440"}}</span>
            <span v-else class="default-link">未设置</span>
            <span class="arrow-right">></span>
          </div>
        </div>
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABKVBMVEU8nv9xuP8AAABarP9tuP8wmP9Xqv00mf9zuf86nP98v/+Pxv9Np/+22/8+n/+QyP9RqP9Jov18vv9Ko/1Qp/9Tqf9YrP9Xqv1Bn/2czv9Fof5/wf97vv+Hw/9+vf+l0v9Zq/4hj/xzuf9erf4nlP9LpP6Tyf+v1v9msf5Rp/2JxP9qtf9yuf8vlfuh0f+Nx/9isP9Rp/6Zzf9Qp/6Jxf9wuP+bzf9vtv5Gof1Yq/6Tyf93u/9drv48nf1TqP5nsv9Lo/56vP+q1f88nPwulPx3u/9isf90vP9JpP6Syf9ttv+w1/97vf9Xqv5fr/4wl/4tk/xdrf1MpP11uv9stf5ksf6l0v+Xy/+KxP6DwP99vv8gjfu12v+Px/+u1/87m/uezv8qkvsylvvdew2pAAAAUXRSTlMwMQAOKCf+Gxg8IFRE3Wt3WLt29o9sTfHMyXheSfTw3NK6q35qY/Pb1MjFYTr189nDuaWgmHD27ujlx8G7lnvm4NLDvLiYjoyDZlP14q6eXuiR7iJfAAADeUlEQVRIx5XXa1PaQBQG4A0bSKRRI4WggkixeMMKKngDvN+rthEogsWK//9H9Owuy8kyDJm8OhnH4eE97NkvkNDYUDMa1XVd0+ARjZo0NDaIEVJTUhbBTUonYizlTI0O9b6YQqU2NjAAnYTVVv92otZqPlHLibdW13yjYzlitAE0wZGF9dc4OlFsQE2CzIyTK5jZINqLKdhAmiIes1//fUtsBoKEPUyOgxbj4AJH9QCKsB/AhsDUY7fSXyYkvaVWE1ixx95frE2rWWNZ5lnYTQ00IYQtmyifOLU7/VfN+/v7H5GPj/1iOQVQhFUT5X7MXvyE12MGDNJmWd2MacwRUc2wpmAAGKF6vd4rz9JmjHDIn4CVPd3vbgNoi0jV6XS63W4DkskVOOS/xKDE9OL07PI+EAhnUjUhrVaruV6xhlSDuQlfMm6qXAQDQceY60Yg2RtnirAIHjZGcapcXAIHUEqXyZeXl68bcdua4lATXCe6F6dT6dT1eYZB7BT0cP7OtmzL2xwm3OKBlVPpSi6jtnK7l7ecxHOCaNg8gmcXFnZjqcr1+YFqD+freScfr5VWsJmfnIq34SI8PNxWD+TMvHbuzrLye1l3HbA2pComgPdXi+WCU8mdNof2rJ63rLuNI5dj5Dg2gTD80V4t5mKFwk3pVOCzubht5+MbSVdgDQeXmEgM9+p1qXrrOCu1o2QEancWLSuxdxSJCCx3JU5bl++kMbzfZncrc54rOPZeNsmX67DaCCSZPRGVIoCFGzQfr/b4Dcs85mJ2/iQeX7ShNsstuyeA0erEwGaOgXY77IJVb2wL4iSeksNLNr/oxQYxsZphuJsNkYPT0vPKSfwpyyzQf5BRTA2Ci48dL4FtNgd8vVTKHrnSfn7+ULBBScgEJrtjm4CbmBaLsJ/9fn8EhwBjM8MNEDxSuxFh397eFBxmmOrMyeYMYFfEU8vtKKYMm9hcqXIcEQEIYbYPluHLGcQGwyGKx/1w+9gQVxoDtWB5ftdtbzHDIWNYbRWuc7XaDmRO5vLy6uqbyFX9l+X5xAJTz6otOwGZUfNdRFAsBozV3E9NiLIniaE6WKBYYtDhwFZiiBFEi9NCTEEHsBQx6mAWMOqgFjFqf4s4gEaLGLnua5EixvLwBIm1iEe438Qq9udI/b+UGYYRxvnhT/iH75cyDBVcUoRK/gOXOeSK8lOHQwAAAABJRU5ErkJggg=="
              alt
            />
            安全邮箱
          </div>
          <div class="item-right">
            <span class="user-email" v-if="true">{{"1649271073@qq.com"}}</span>
            <span v-else class="default-link">未设置</span>
            <span class="arrow-right">></span>
          </div>
        </div>
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,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"
              alt="fail"
            />
            修改密码
          </div>
          <div class="item-right">
            <span class="user-email" v-if="false">{{"点击修改"}}</span>
            <span v-else class="default-link">未设置</span>
            <span class="arrow-right">></span>
          </div>
        </div>
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABIFBMVEVb34oAAABAz3Nd34tZ3YhW24VC0XRF0nZj5JFY2oZf3Ytq4pRK03p+6KN75KGQ6bCd7LpU2IJt4JWu88ZI0Hie7rqt9MV03Zlj3o934p1h3o1K0ntR1oCf7rtn35Jx4pmK662D5qV86aFz5ZyB5qVg3Ixt5Jdj3o554p+D5qaa7rmB4qNl3pBZ2IVN1Hyb6bdk4ZCh7ryV57JHz3en8sJQ1X9s35WL5Kps5JeW7LWK661W2INs5Jev88iG6qmu9Mdh34+U67NV1oKf77tW039W14Nk4pGC5aVe2opq5pV75J9p25FP1H546qBw6Jqm8sGQ569w4JhL0nqC7Kdq4pSa77iW6rSw9MeK4qmg77yS7rON7a+J7KyJ5qqA36J73p4EJ934AAAARXRSTlMwADEpDhgoHyA7Xj5zV23k/PJI9vLk2f796lTGw7GamXZjSP7p5NfVvbKLioZG8/Lwz87AvK+upYmFT0717NHPvqibmoZNpQQzAAADg0lEQVRIx43XCVfaQBAH8C3ZzdkQxIJKiwqCiEA96n0f1ahYixVQjur3/xad7BI2ZFLg7/P5ni8/Z3YdNgn5FBnKdMWPrjMafRWJgJR5lAy/wDNG6TSYMgVkKArB5TGmukIEVaTk31CfIoyWKuGY6hhToKOXh7qA4gijxaLasn1GMRYWQRQFNMZUxzSaa1RiuVwElQmahHpGQb/21y0xw9dY+aMj2z46yltEQTqIqaKgarnrnfN0+nznOhdRmwosNys4HZZ9mE2fzr6+zp6ms4e2FcY6HWKmSCZ+2utpkCKz6XUb1WY+pnp4VRbY38OAtsJYpwMMTYfs8g7YTounA3pnGTWuCUzRUOazKaDdbg/S7QJPZfN4zzxMGSfBEbG3Eq1ur//C0++1W4ktO+qfDRh3HU+1ukB/8bgv/XYiFY9aNYmYj/xyCiy4J8gK8H47tZzEpT1MMHZ6L4Le398/rTy4fQdjAphqeDDjDlhOIc0maAe3TTRKmE5Q7DMXLKe3t03Q7pltELRoRnQF42S5AFhYTz8vlJMERdU4xn2vrTwJyvXJGu8aDTiJ/BwbB6snTd/Ob64eGAQnpnKMY4L28WbpIBN5TAAmUTEy1b3VzXmvbGmvmjFIVGVJETcXL0rFYuli0RQUR2Ksa8cZ08wc13yLS/9PWgD9ZKxIr0RvmJG045UlyCJkaakSt5PGtLtt5S63HadQWOApFBxnez9n4SFR8ZAYcPalNtqNv677AHHdt0Zjw8lWTANPmKaGZ3N9q9NJcOyC5bidSGxXkhgzPTyaWwlpIe+Cb2yPjmgspjH0kcxdbnAK8plnbu7j4x24s5+T0ItG0WFwmAIqZH2YOeBvTiUmLYShYyi53264IJv1+fm7YYCD3q/FAPpRWfgANOyyZ5sC3gxzB8XfyqYhLXTtYRbE8TLYupSPIp5+X4sbwcKUH/pqEK+5YIPyj5fHx7v6xyim4najKRLbe3PQs7QAhb6p1/dMQ1pN3uikrq4WizODfId8GWSmWKoaIysWOLjhsZpZvdrd/cbzlecHZHf36qdZi8mw4M1dauPYND+jmOZxaKt97O+Z/AsTotKRBxoVsXGWhR6l1MlGWiox15o6tQ0+xGE92UqMOp/cs8RYT7YSy9YnWY2Oe03Q1HGrFWUxlvsmOKZypxBG1XHVaV/KNGhAHTAoqY15KcOhgvuUQ5x/VDOwXkKoY2AAAAAASUVORK5CYII="
              alt="fail"
            />
            第三方账号
          </div>
          <div class="item-right">
            <span class="user-email" v-if="false">{{"点击修改"}}</span>
            <span v-else class="default-link">未设置</span>
            <span class="arrow-right">></span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="section-head">
        
        <h2 class="section-title">账号安全</h2>
      </div>
      <div class="section-list">
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA/1BMVEVT2oMAAABO2H5M1HxY3IVV2oRN132T7bR2551f3Yyp8sNa3Iht35aR7bFu5JhT1oKH6qmH7axQ1oBk2o5a2odQ04Bz5JtX1oRZ2YVo4JJe14ll5JJ45qBs35R05pxf3Iyj7r6H6apj245r3ZNl2I5W1oOT67J45p9d14ho35Jf2YtV1oNv4pZn25Bu5pij8r5y5ptz5Jte2op35J+i7b1+5KJW1YOw88hV04OR6rCi7b2I6qpb1YZq5ZVV2IRi345c3ImB66Z46Z9x6pyq8cN+6KN4455y4Zlo3pFa1oaw88ig8LyU77WO7K+l8cCJ7ayJ56qh7Lya7riW6rNj2Ix4HAW5AAAAPXRSTlMwACg6DhgffT9gxVT+0aW7e/ZreUtG6/PgovXc9ezf38N19s3MpvfswbyiiX7s29TGkHFR9c7K9NzArWCYxWEA9QAAAwxJREFUSMeV1wlTGjEYxvFtkl1LRbxQrMUDbCkUoQLeVlDqsdTaw/r9P0uTJ5E3MWEH/tM6o+7PN+zOQjZ6E0zECWMRYiyJRfioKABFLKlisJrHQmRhogp5MYzPxiKJJsUSkYn9qf70MBZvBGgmF2FMY6ceHrl2Nh2FzlR2pCOyU5cIF4t4SkizCcdsFsxiG4tZLF2xiOwsGFpj6wW/zcx62cAYTPaiMjexygVpJgymq9SbO38XbBedL/XoLgG2B1d2T3643dgdnlWc0ZFziee+nty4/UJ/dYcLS4RjoTCzsTr6weoJ/dPVbMwUjiMbHz48/aQedX9MtYVKZI32cE2C36ZrdKu6Q+UjYJPEIrHxQu0RwrCh7F6WR/flo33n/ohi5mJphui77NKUpulgMEjzBzZmcZS4ePn6VilbAl7JBtU9gzlwEklLLUk8dKmEmvavrqp7q0YCsxAG1TqFVVSmsYlPxC/0cjxWNQKmiLrYRBZ4U2Oegcvr7Xb7g2lHtoFK/T6wjhO3cflgfz5Qc7E02vwITDHm4U4uUPMY2Jnr4+H6QQG9f+mLqr7RVxgS8SAelj+r1nVbqlartTkaAVMshGV0M9yjfJo++ziJkgmY+B30s9SlMeYaxzaunC3jtvCsxCOJ610tURKbW5LrH/U6R9tovWyWDJhvqYt9enrcnHduSffNgPc6BdRo52WpvhWrO/VPqFnkr99JmK3XiijX2RrfiaPSYndNx+klM2ABzPV/E19tVCH7qtJxE0zHaXsThXYEPFfYkhYSenGFsPPWi9Huny0WtvOpxKTrRev3HFiYjxtG5xut7RcajUZ9kfq2ZpD7ceNuKcyLL+a63RWrXFFDmp0I/yPWxL2CewNgkdC68TUQHcBxqu1tBaMjpt4Y0IYmMIO7/xCnRVtbqWlmc7rErzZx0JbkvkScWZs40t6R7qpNsIRp5QQmnW4W2riSprj/jbGESdPSad3+kn1MT0ShRXNDJz4m0FlnBCjGMDYb6+km7k6diInjoSxhKolUSdZDmZ8AH1NAv//4m7V1caL7vwAAAABJRU5ErkJggg=="
              alt
            />
            密保问题
          </div>
          <div class="item-right">
            <span v-if="true">{{"+86 150****6440"}}</span>
            <span v-else class="default-link">未设置</span>
            <span class="arrow-right">></span>
          </div>
        </div>
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,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"
              alt
            />
            登录设备管理
          </div>
          <div class="item-right">
            
            <span class="arrow-right">></span>
          </div>
        </div>
        <div class="list-item">
          <div class="item-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABIFBMVEU6nf9wuf8AAAA8nf9Wqv9tt/9brf5st/8wl/9Eov96vf9ZqP99v/+Zzf85m/9Yq/9xt/5aq/8wlv1Yq/9fr/+02f9osv9brf9Vq/+Oxv9drf9qtP8zl/xcrv9jsf+PyP+Pyf86nP1Xqv0ulfyy2P9Ho/0vlvut1v+o1P9fr/+i0P9hsP+Px/+i0f9ksf+Av/82mf5xt/8tlPy02v9UqP5erv+n0/95vP+i0P86nf6Ewv+Mxv82mv+Wyv+x2P+Mxf9FoP1utf6XzP9ut/+Fwf9Iov2l0f+YzP+gz/6Ewv9msv9Lpf2p1P8yl/0ymP5os/9utv9hsP50uv8xlvx7vf9Ko/1SqP1Cnv06mvyKxP+p1P+w2P+Tyf+Dwf+azf+g0P/j70CGAAAAT3RSTlMwMAAmDyj+GRs4IAtHd0xG8bieZ1r18aJQ7+nPuX1ybl7x8Ofm5s/KtpL2wrGdhn1qPfDt39bTyMd5aE5E9NnR0cbBsZybjYPk4t+spoZbdSjvDwAAA8dJREFUSMeV12lX2kAUBuBJMyE7AVmVVRQVUJRa695WbbU7QWVpC/L//0XvzCSdDJNzcvrywS88eefeAAJ6FRusW5amKBp5WJaO458Vg22s65ZGKYT81Sxdx3YSZpQgKZqOEzG2BCJwC0tYHFWwkg7bZWxLtXLCchlLw8aObsdhLNukxaHETcmT2xxLNlljEdt6MpLnRnxX/6OjGIs2WWOO4wd2mg3XbTSdgSIE8bEpXh144DiXl033YG93d+/AbV5eOs4g7uBILobKB3Dvto+PC4Xj4+13cIWHpqMIUXGALY27hnt//53Iwp8wvwvbb8/2Du4f3AtHrAaMI9b9vgssQGK6n8/2GxGNAQu32D0DGsLlcvkSZEnS7X6+bQg3GwkTu28LETifz3/RzFlert8fcqxiwLSYY4DEMbhYPNMsFvQi6wTzagl3l1H4CPF9/5EGrnEaYARRANNT85m7LxTSSoCQ4b/4mdM6KCrhoWOkC/j2ek4rKaVyNBqlgoyKN3XKaDNSdWRpEdy4vf4VoT6lGyfZNxOSVKsXaZbx/jrgcNYhs9laPTuZjMfjSSubizarSIviC8BgGQ1t3Sx/AwshmDdrcZjZTPHrkNqcVy69ATydjlul1WYlkuZHin2wlVKnt5FqZWtevnPSYrhdykeaFRUp0eQBs10V73Jev7fRq5le5ySVmoynkHanHGlGK9g5XF88s3m/9k2vVsp5XqcyHIW4VmYs4OKxBxdfFs8+xcVezSvnzXy/UmR4Npu2cybrZVlZmJl/v2DFoCt1z/T6lYwPeDwFvPkhLA4XpkYwUpz9L4/0pQE6c9PPd27ABsWz9rd0HEZhBoenFIOGjZ/eQa8/ZPZpVj03V7CuEasED9P5mAHL9COEXIrZp821tIgNpKt8eRCzflekbwWiuX0CWz0CK2KsI94Mj3KtUkzRwNz+8F/v653zNBIxhg8D2szjlciLYjKh7WxXT5CdtRWLDPIZpiHC+djl0gbgIKHdIgOLwQSrqlht5ugbgWUa2qNVqxJs66pQDTqfJXpKMmO2+nPVIsMGDNViM9Gf2mMigbJe2aqY/buh1aLOffqwySzZMz2ztC6GoVrSadChZbuSiwFDjBh9dV7dpLZ6fgVWLg4wXbiU9NHaztYWHJneX7k4xDYmWD76j2r1R9qMtwHmB5eOnk5fxVpD/Col6KQYNsckOFnzXvFLnNid3Mux1J3cy/F/davQK2N2vxNtWCtjG46eeGQZy5MnUxnbApdp8o8ybBiqGnGqYeDEH2U8lKvgQBIa/6y/dRj2kptuceEAAAAASUVORK5CYII="
              alt
            />
            登录二次验证
          </div>
          <div class="item-right">
            
            <span class="arrow-right">></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    verifyPhone(){
      this.$router.push('/verify_phone');
    }
  }
};
</script>

<style lang="scss">
.safe-login-page{
  background-color: #fff;
  .content-section{
    width: 100%;
    margin-bottom: 20px;
    .section-head{
      width: 100%;
      height: 24px;
      line-height: 24px;
      text-align: left;
      padding: 13px 20px;
      h2{
        font-size: 19px;
        color: #333;
        padding-left: 5px;
        border-left: 4px solid #333;
      }
    }
    .section-list{
      .list-item{
        padding: 15px 20px;
        font-size: 14px;
        height: 40px;
        cursor: pointer;
        img{
          width: 30px;
          height: 30px;
          vertical-align: middle;
          margin-right: 5px;
        }
        .item-left{
          float: left;
        }
        .item-right{
          float: right;
          .default-link{
            color: #ff6700;
          }
          .arrow-right{
            font-size: 18px;
            margin-left: 20px;
            color: #bbb;
          }
        }

      }
    }
  }
}
</style>