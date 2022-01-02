var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define("app", ["require", "exports", "preact", "vega-lite", "vega"], function (require, exports, preact_1, vegaLite, vega) {
    "use strict";
    exports.__esModule = true;
    vegaLite = __importStar(vegaLite);
    vega = __importStar(vega);
    var NODE_VERSIONS = [12, 14, 16, 17];
    // colors taken from https://colorbrewer2.org/?type=qualitative&scheme=Set3&n=12
    var COLORS = [
        '#8dd3c7',
        '#ffffb3',
        '#bebada',
        '#fb8072',
        '#80b1d3',
        '#fdb462',
        '#b3de69',
        '#fccde5',
        '#d9d9d9',
        '#bc80bd',
        '#ccebc5',
        '#ffed6f',
    ];
    // create a stable color list
    var BENCHMARKS = [
        { name: 'validate', label: 'Safe Validation', color: COLORS[0], order: '0' },
        {
            name: 'validateStrict',
            label: 'Strict Validation',
            color: COLORS[4],
            order: '1'
        },
        {
            name: 'validateLoose',
            label: 'Unsafe Validation',
            color: COLORS[1],
            order: '2'
        },
    ];
    var BENCHMARKS_ORDER = Object.fromEntries(BENCHMARKS.map(function (b, idx) { return [b.name, b.order]; }));
    function normalizePartialValues(values) {
        if (!values.length) {
            return [];
        }
        var nodeVersion = values[0].nodeVersion;
        if (!values.every(function (v) { return v.nodeVersion === nodeVersion; })) {
            throw new Error('normalizeValues: expected same node version on results');
        }
        var existingValues = {};
        values.forEach(function (r) {
            if (existingValues[r.name]) {
                existingValues[r.name].push(r);
            }
            else {
                existingValues[r.name] = [r];
            }
        });
        var normalized = [];
        Object.entries(existingValues).forEach(function (_a) {
            var name = _a[0], results = _a[1];
            normalized.push.apply(normalized, results);
            var missingBenchmarks = BENCHMARKS.map(function (b) { return b.name; }).filter(function (n) { return !results.find(function (r) { return r.name === n; }); });
            missingBenchmarks.forEach(function (benchmark) {
                normalized.push({
                    benchmark: benchmark,
                    name: name,
                    margin: 0,
                    nodeVersion: nodeVersion,
                    ops: 0
                });
            });
        });
        return normalized;
    }
    function graph(selectedBenchmarks, values) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedBenchmarkIndex, vegaSpec, view, svg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedBenchmarkIndex = new Map(selectedBenchmarks.map(function (b) { return [b.name, b]; }));
                        vegaSpec = vegaLite.compile({
                            data: {
                                values: values
                                    .filter(function (b) { return selectedBenchmarkIndex.has(b.benchmark); })
                                    .map(function (b) { return (__assign(__assign({}, b), { benchmark: "".concat(BENCHMARKS_ORDER[b.benchmark], "-").concat(b.benchmark) })); })
                            },
                            width: 600,
                            height: { step: 15 },
                            mark: 'bar',
                            encoding: {
                                row: {
                                    field: 'name',
                                    type: 'nominal',
                                    title: null,
                                    spacing: 0,
                                    header: {
                                        labelAngle: 0,
                                        labelOrient: 'left',
                                        labelAnchor: 'middle',
                                        labelAlign: 'left'
                                    }
                                },
                                x: {
                                    field: 'ops',
                                    type: 'quantitative',
                                    title: ['operations / sec', '(better ⯈)'],
                                    axis: {
                                        orient: 'top',
                                        offset: 10,
                                        labelFontSize: 12,
                                        titleFontSize: 14,
                                        titleFontWeight: 'normal'
                                    }
                                },
                                y: {
                                    field: 'benchmark',
                                    type: 'nominal',
                                    title: 'Benchmark',
                                    axis: null
                                },
                                color: {
                                    field: 'benchmark',
                                    type: 'nominal',
                                    legend: null,
                                    scale: {
                                        range: selectedBenchmarks.map(function (b) { return b.color; })
                                    }
                                }
                            }
                        });
                        view = new vega.View(vega.parse(vegaSpec.spec), { renderer: 'none' });
                        return [4 /*yield*/, view.toSVG()];
                    case 1:
                        svg = _a.sent();
                        return [2 /*return*/, svg];
                }
            });
        });
    }
    var Graph = /** @class */ (function (_super) {
        __extends(Graph, _super);
        function Graph() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Graph.prototype.createGraph = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (this.prevProps === this.props) {
                                return [2 /*return*/];
                            }
                            this.prevProps = this.props;
                            _a = this.setState;
                            _b = {};
                            return [4 /*yield*/, graph(this.props.benchmarks, this.props.values)];
                        case 1:
                            _a.apply(this, [(_b.svg = _c.sent(),
                                    _b)]);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Graph.prototype.render = function () {
            this.createGraph();
            return ((0, preact_1.h)("div", { style: { height: '650px' }, dangerouslySetInnerHTML: { __html: this.state.svg } }));
        };
        return Graph;
    }(preact_1.Component));
    function Checkbox(props) {
        return ((0, preact_1.h)("div", { style: { display: 'flex', backgroundColor: props.color } },
            (0, preact_1.h)("input", { id: props.id, type: "checkbox", name: props.id, checked: props.checked, onInput: function () { return props.onChange(!props.checked); } }),
            (0, preact_1.h)("label", { style: { width: '100%' }, "for": props.id }, props.label)));
    }
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                selectedBenchmarks: BENCHMARKS.reduce(function (acc, b) {
                    var _a;
                    return (__assign(__assign({}, acc), (_a = {}, _a[b.name] = true, _a)));
                }, {}),
                values: []
            };
            return _this;
        }
        App.prototype.componentDidMount = function () {
            var _this = this;
            NODE_VERSIONS.forEach(function (v) {
                fetch("results/node-".concat(v, ".json"))
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    _this.setState(function (state) { return (__assign(__assign({}, state), { values: __spreadArray(__spreadArray([], state.values, true), normalizePartialValues(data.results), true) })); });
                })["catch"](function (err) {
                    console.info("no data for node ".concat(v));
                });
            });
        };
        App.prototype.render = function () {
            var _this = this;
            return ((0, preact_1.h)("div", null,
                (0, preact_1.h)("h1", null, "Runtype Benchmarks"),
                (0, preact_1.h)("p", null, "Benchmark Comparison of Packages with Runtime Validation and TypeScript Support"),
                (0, preact_1.h)("div", { style: { display: 'flex', margin: '1rem 0' } },
                    (0, preact_1.h)("div", { style: { width: '33%' } },
                        (0, preact_1.h)("label", null, "Benchmarks:"),
                        (0, preact_1.h)("div", null, BENCHMARKS.map(function (b) {
                            var _a;
                            return ((0, preact_1.h)(Checkbox, { id: b.name, color: b.color, checked: (_a = _this.state.selectedBenchmarks[b.name]) !== null && _a !== void 0 ? _a : false, label: b.label, onChange: function (checked) {
                                    return _this.setState(function (state) {
                                        var _a;
                                        return (__assign(__assign({}, state), { selectedBenchmarks: __assign(__assign({}, _this.state.selectedBenchmarks), (_a = {}, _a[b.name] = checked, _a)) }));
                                    });
                                } }));
                        })))),
                (0, preact_1.h)(Graph, { benchmarks: BENCHMARKS.filter(function (b) { return _this.state.selectedBenchmarks[b.name]; }), values: this.state.values })));
        };
        return App;
    }(preact_1.Component));
    (0, preact_1.render)((0, preact_1.h)(App, null), document.body);
});
//# sourceMappingURL=app.js.map