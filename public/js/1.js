(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      type: String,
      "default": 'submit'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PageLayout'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/PageLayout */ "./resources/js/Layouts/PageLayout.vue");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  props: {
    title: String,
    description: String,
    errors: Object
  },
  metaInfo: {
    title: 'Free Pattern Drafting Training',
    meta: [{
      description: 'Register for Image Clothia Innovations FREE pattern drafting training'
    }]
  },
  components: {
    PageLayout: _Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        first_name: null,
        last_name: null,
        email: null,
        gender: null,
        phone_number: null,
        stay_in_ilorin: null,
        experience: null,
        channel: null
      }),
      flash: {
        message: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form['label'] = this.generateLabel();
      this.$inertia.post(this.route('applicants.store'), this.form, {
        onSuccess: function onSuccess() {
          if (window.location.pathname == '/apply') {
            fbq('track', 'CompleteRegistration', {
              content_name: 'Free Pattern drafting class',
              currency: 'NGN',
              status: 'success',
              value: 0.00
            });
          }

          var message = _this.$page.props.flash.message;
          _this.flash = {
            message: message
          }; // setTimeout(() => this.flash.message = null, 10000)

          _this.$swal({
            icon: 'success',
            iconColor: '#8B5CF6',
            title: 'Congrats!',
            text: message
          });

          _this.form.reset();
        },
        onError: function onError() {
          _this.$swal({
            title: 'Errors:',
            text: 'please correct the fields in red'
          });
        }
      });
    },
    generateLabel: function generateLabel() {
      var a = new Uint32Array(3);
      window.crypto.getRandomValues(a);
      return (performance.now().toString(36) + Array.from(a).map(function (A) {
        return A.toString(36);
      }).join('')).replace(/\./g, '');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass:
        "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",
      attrs: { type: _vm.type }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "header",
      {
        staticClass:
          "bg-gradient-to-r from-purple-500 to-pink-500 mb-12 text-gray-100"
      },
      [
        _c("div", { staticClass: "mx-4 md:mx-0" }, [
          _c(
            "nav",
            { staticClass: "container mx-auto flex justify-between py-3" },
            [
              _c(
                "inertia-link",
                { attrs: { href: _vm.route("applicants.home") } },
                [
                  _c(
                    "h1",
                    { staticClass: "uppercase font-medium tracking-wider" },
                    [_vm._v("Image clothia innovations limited")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "flex items-center" }, [
                _c("li", { staticClass: "capitalize" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://facebook.com/imageclothia",
                        title: "Image Clothia Facebook Page",
                        target: "_blank"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "w-6 h-6 fill-current text-gray-200",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 167.657 167.657"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ])
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container mx-auto" }, [
      _c("main", { staticClass: "mx-4 md:mx-0" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("page-layout", [
    _vm.flash.message
      ? _c(
          "div",
          {
            staticClass:
              "lg:w-2/3 mb-2 font-medium bg-purple-100 rounded-l py-2 px-4"
          },
          [
            _vm._v(
              "\n    Hi " +
                _vm._s(_vm.flash.message) +
                " please check your Email and SMS for further information.\n  "
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "lg:w-2/3" }, [
      _c(
        "form",
        {
          attrs: { autocomplete: "off" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4" },
            [
              _c("label", { staticClass: "block" }, [
                _c("span", { staticClass: "text-gray-700" }, [
                  _vm._v("First name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.first_name,
                      expression: "form.first_name"
                    }
                  ],
                  staticClass: "form-input mt-1 block w-full",
                  class: { "border- border-red-400": _vm.errors.first_name },
                  attrs: { name: "first_name", placeholder: "First name" },
                  domProps: { value: _vm.form.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "first_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first_name
                  ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first_name))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "block" }, [
                _c("span", { staticClass: "text-gray-700" }, [
                  _vm._v("Last name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.last_name,
                      expression: "form.last_name"
                    }
                  ],
                  staticClass: "form-input mt-1 block w-full",
                  class: { "border-1 border-red-400": _vm.errors.last_name },
                  attrs: { name: "last_name", placeholder: "Last name" },
                  domProps: { value: _vm.form.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "last_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.last_name
                  ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.last_name))
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4 mb-4" }, [
            _c("span", { staticClass: "text-gray-700" }, [_vm._v("Gender")]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-2" }, [
              _c("label", { staticClass: "inline-flex items-center" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender"
                    }
                  ],
                  staticClass: "form-radio",
                  attrs: { type: "radio", name: "gender", value: "Female" },
                  domProps: { checked: _vm._q(_vm.form.gender, "Female") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "gender", "Female")
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2" }, [_vm._v("Female")])
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "inline-flex items-center ml-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender"
                    }
                  ],
                  staticClass: "form-radio",
                  attrs: { type: "radio", name: "gender", value: "Male" },
                  domProps: { checked: _vm._q(_vm.form.gender, "Male") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "gender", "Male")
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2" }, [_vm._v("Male")])
              ]),
              _vm._v(" "),
              _vm.errors.gender
                ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.gender))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "grid grid-cols-1 mb-4" }, [
            _c("label", { staticClass: "block" }, [
              _c("span", { staticClass: "text-gray-700" }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "form-input mt-1 block w-full",
                class: { "border-1 border-red-400": _vm.errors.email },
                attrs: {
                  name: "email",
                  placeholder: "name@myemailprovider.com"
                },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.errors.email
              ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.email))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "grid grid-cols-1 mb-4" }, [
            _c("label", { staticClass: "block" }, [
              _c("span", { staticClass: "text-gray-700" }, [
                _vm._v("Phone number")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.phone_number,
                    expression: "form.phone_number"
                  }
                ],
                staticClass: "form-input mt-1 block w-full",
                class: { "border-1 border-red-400": _vm.errors.phone_number },
                attrs: { name: "phone_number", placeholder: "090xxxxxxxx" },
                domProps: { value: _vm.form.phone_number },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "phone_number", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.errors.phone_number
              ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.phone_number))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4"
            },
            [
              _c("div", { staticClass: "text-gray-400 mb-2" }, [
                _vm._v("Location")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-gray-700" }, [
                _vm._v("Do you stay in Ilorin?")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { staticClass: "inline-flex items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.stay_in_ilorin,
                        expression: "form.stay_in_ilorin"
                      }
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      type: "radio",
                      name: "stay_in_ilorin",
                      value: "Yes"
                    },
                    domProps: {
                      checked: _vm._q(_vm.form.stay_in_ilorin, "Yes")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "stay_in_ilorin", "Yes")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [_vm._v("Yes")])
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "inline-flex items-center ml-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.stay_in_ilorin,
                        expression: "form.stay_in_ilorin"
                      }
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      type: "radio",
                      name: "stay_in_ilorin",
                      value: "No"
                    },
                    domProps: {
                      checked: _vm._q(_vm.form.stay_in_ilorin, "No")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "stay_in_ilorin", "No")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [_vm._v("No")])
                ]),
                _vm._v(" "),
                _vm.errors.stay_in_ilorin
                  ? _c("div", { staticClass: "mt-1 text-red-600 text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.stay_in_ilorin))
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4"
            },
            [
              _c("div", { staticClass: "text-gray-400 mb-2" }, [
                _vm._v("Your experience level")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-gray-700" }, [
                _vm._v("Which of these statements best describe you?")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { staticClass: "flex leading-8 items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.experience,
                        expression: "form.experience"
                      }
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      type: "radio",
                      name: "experience",
                      value: "I want to learn Fashion design"
                    },
                    domProps: {
                      checked: _vm._q(
                        _vm.form.experience,
                        "I want to learn Fashion design"
                      )
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(
                          _vm.form,
                          "experience",
                          "I want to learn Fashion design"
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v("I want to learn Fashion design.")
                  ])
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "flex leading-8 items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.experience,
                        expression: "form.experience"
                      }
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      type: "radio",
                      name: "experience",
                      value: "I am a beginner Fashion designer"
                    },
                    domProps: {
                      checked: _vm._q(
                        _vm.form.experience,
                        "I am a beginner Fashion designer"
                      )
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(
                          _vm.form,
                          "experience",
                          "I am a beginner Fashion designer"
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v("I am a beginner Fashion designer.")
                  ])
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "flex leading-8 items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.experience,
                        expression: "form.experience"
                      }
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      type: "radio",
                      name: "experience",
                      value:
                        "I am a professional Fashion designer but I don't understand pattern darfting"
                    },
                    domProps: {
                      checked: _vm._q(
                        _vm.form.experience,
                        "I am a professional Fashion designer but I don't understand pattern darfting"
                      )
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(
                          _vm.form,
                          "experience",
                          "I am a professional Fashion designer but I don't understand pattern darfting"
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v(
                      "Professional, but I don't understand pattern drafting."
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.errors.experience
                  ? _c("div", { staticClass: "mt-1 text-red-600 text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.experience))
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4"
            },
            [
              _c("div", { staticClass: "text-gray-400 mb-2" }, [
                _vm._v("How you got to know about this FREE training")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-gray-700" }, [
                _vm._v("How did you learn about this training?")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c(
                  "label",
                  { staticClass: "block md:inline-flex md:items-center" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.channel,
                          expression: "form.channel"
                        }
                      ],
                      staticClass: "form-radio",
                      attrs: {
                        type: "radio",
                        name: "channel",
                        value: "Facebook"
                      },
                      domProps: {
                        checked: _vm._q(_vm.form.channel, "Facebook")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "channel", "Facebook")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2 leading-8" }, [
                      _vm._v("Facebook")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "block md:inline-flex md:items-center md:ml-6"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.channel,
                          expression: "form.channel"
                        }
                      ],
                      staticClass: "form-radio",
                      attrs: {
                        type: "radio",
                        name: "channel",
                        value: "Instagram"
                      },
                      domProps: {
                        checked: _vm._q(_vm.form.channel, "Instagram")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "channel", "Instagram")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2 leading-8" }, [
                      _vm._v("Instagram")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "block md:inline-flex md:items-center md:ml-6"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.channel,
                          expression: "form.channel"
                        }
                      ],
                      staticClass: "form-radio",
                      attrs: {
                        type: "radio",
                        name: "channel",
                        value: "Someone"
                      },
                      domProps: {
                        checked: _vm._q(_vm.form.channel, "Someone")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "channel", "Someone")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2 leading-8" }, [
                      _vm._v("Someone (Friend / Acquaintance)")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.errors.channel
                  ? _c("div", { staticClass: "mt-1 text-red-600 text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.channel))
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              staticClass:
                "mb-4 bg-pink-500 hover:bg-purple-700 active:bg-purple-900"
            },
            [_vm._v("Register")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Jetstream/Button.vue":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Button.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=afb94134& */ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Jetstream/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&":
/*!**************************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=afb94134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/PageLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Layouts/PageLayout.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=template&id=3842e4c6& */ "./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6&");
/* harmony import */ var _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/PageLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6&":
/*!****************************************************************************!*\
  !*** ./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=template&id=3842e4c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/PageLayout.vue?vue&type=template&id=3842e4c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_3842e4c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Applications/Register.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Applications/Register.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1c1a38d6& */ "./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Applications/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Applications/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=1c1a38d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Applications/Register.vue?vue&type=template&id=1c1a38d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1c1a38d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);