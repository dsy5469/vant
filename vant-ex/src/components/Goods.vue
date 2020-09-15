<template>
    <div>
        <!-- vant导航栏 -->
        <van-sticky>
            <van-nav-bar style="background-color: #3090EC;">
                
                <template #left>
                    <van-icon @click="back" color="white" name="arrow-left" />
                </template>
                
                <template #title>
                    <span style="color: white;">海关出入境特殊物品卫生检疫监管</span>
                </template>	
            </van-nav-bar>
        </van-sticky>

        <van-cell title="查询条件" value="" size="large"/>
        <div style="border-radius:2px;border:solid 1px #ececec; height:160px; width:92%; margin:10px auto;">
            <van-field v-model="text" label="标题" label-align="right" size="large">
                <template slot="input">
                    <input type="text" class="bod"/>
                </template>
            </van-field>
            <van-field v-model="text" label="发布时间" label-align="right" size="large">
                <template slot="input">
                    <input type="text" class="bod"/>
                </template>
            </van-field>
            <van-field v-model="text" label="至" label-align="right" size="large">
                <template slot="input">
                    <input type="text" class="bod"/>
                </template>
            </van-field>
        </div>
        <van-row>
            <van-col span="5"  offset="6">
                <van-button type="info">查询</van-button>
            </van-col>
            <van-col span="2"></van-col>
            <van-col span="11">
                <van-button type="info">重置</van-button>
            </van-col>
        </van-row>
        <br/>
        <div style="margin-left:4%;"><van-button type="default">查看</van-button></div>

        <div style="border:none 1px #ececec; height:200px; width:92%; margin:15px auto;">
            <v-table is-horizontal-resize style="width:100%;" 
            :columns="columns" 
            :table-data="tableData" 
            row-hover-color="#eee" 
            row-click-color="#edf7ff" 
            :cell-edit-done="cellEditDone"
            @sort-change="sortChange"
            :paging-index="(pageIndex-1)*pageSize"   	
            ></v-table>
            <div class="mt20 mb20 bold" style="margin-top:10px;">
                <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="total" size='small' :page-size="pageSize" :layout="['prev', 'pager', 'next']"></v-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Icon,NavBar,Sticky,Cell,Field,Button,Row,Col } from 'vant';
    Vue.use(Icon).use(NavBar).use(Sticky).use(Cell).use(Field).use(Button).use(Row).use(Col);
    import '@vant/touch-emulator';
    export default {
        data(){
            return{
                text:"",
                total:4,
                pageIndex:1,
                pageSize:2,
                tableData:[],
                tableDate:[{
                    RowId: 1,
                        dt_Deadline: "2020-06-13T03:03:34.777Z",
                        dt_OfficialDeadline: "2020-07-28",
                        n_CaseID: 49218,
                        n_EmployeeID: 1000288,
                        s_CaseName: "移动电源（P521）",
                        s_CaseSerial: "ZJM07",
                        s_ClientName: "宁波狮球线缆有限公司",
                        s_Name: "张三",
                        s_Status: "未处理",
                        s_TaskName: "受通转达"
                    },
                    {
                        RowId: 2,
                        dt_Deadline: "2020-07-27T16:00:00Z",
                        dt_OfficialDeadline: "2020-07-28",
                        n_CaseID: 86167,
                        n_EmployeeID: 25,
                        s_CaseName: "动态环境下基于多特征聚类匹配的目标跟踪方法",
                        s_CaseSerial: "ZL17-3723-1",
                        s_ClientName: "武汉工程大学",
                        s_Name: "李四",
                        s_Status: "未处理",
                        s_TaskName: "交审查费"
                    },
                    {
                        RowId: 3,
                        dt_Deadline: "2020-07-27T16:00:00Z",
                        dt_OfficialDeadline: "2020-07-28",
                        n_CaseID: 86167,
                        n_EmployeeID: 12,
                        s_CaseName: "动态环境下基于多特征聚类匹配的目标跟踪方法",
                        s_CaseSerial: "ZL17-3723-1",
                        s_ClientName: "武汉工程大学  授权后通知客户自缴官费",
                        s_Name: "王五",
                        s_Status: "未处理",
                        s_TaskName: "提实审"
                    },
                    {
                        RowId: 4,
                        dt_Deadline: "2020-07-27T16:00:00Z",
                        dt_OfficialDeadline: "2020-07-28",
                        n_CaseID: 86162,
                        n_EmployeeID: 135,
                        s_CaseName: "一种防静电保护膜及其制造方法",
                        s_CaseSerial: "ZL17-3718-1",
                        s_ClientName: "宁波启合新材料科技有限公司 有协议  （俞雄飞客户）",
                        s_Name: "赵六",
                        s_Status: "未处理",
                        s_TaskName: "交审查费",
                    }
                ],
                columns: [{
                            field: 's_CaseSerial',
                            title: '我方文号',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            formatter: function(rowData, rowIndex, pagingIndex, field) {
                                return `<span style="color:#4078c0;">${rowData[field]}</span>`;
                            },
                            isResize: true,
                            isFrozen: true,
                            isEdit:true
                        },
                        {
                            field: 'dt_OfficialDeadline',
                            title: '官方期限',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            isResize: true,
                            isEdit:true
                        },
                        {
                            field: 's_TaskName',
                            title: '任务名称',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            isResize: true,
                            isEdit:true
                        },
                        {
                            field: 's_CaseName',
                            title: '案件名称',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            isResize: true,
                            isEdit:true
                        },
                        {
                            field: 's_ClientName',
                            title: '客户名称',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            isResize: true,
                            isEdit:true
                        },
                        {
                            field: 's_Name',
                            title: '执行人',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            isResize: true,
                            isEdit:true
                        },					
                        {
                            field: 's_Status',
                            title: '任务状态',
                            width: 150,
                            titleAlign: 'center',
                            columnAlign: 'center',
                            formatter: function(rowData, rowIndex, pagingIndex, field) {
                                if(rowData.s_Status == '未处理'){
                                    return `<span class='cell-edit-color' style="color:#ED7D31">${rowData[field]}</span>`;
                                }else{
                                    return `<span class='cell-edit-color' >${rowData[field]}</span>`;
                                }
                                
                            },					
                            isResize: true
                        }
                ]
            }
        },
        created() {
            this.getTableData();
        },
        methods:{
            back(){ //返回我的页面
                this.$router.push({
                    path:'/index'
                })
            },
            // 单元格编辑回调
            cellEditDone(newValue,oldValue,rowIndex,rowData,field){
 
                this.tableData[rowIndex][field] = newValue;
 
                // 接下来处理你的业务逻辑，数据持久化等...
            },
            sortChange(){
                return;
            },

            getTableData() {
                this.tableData = this.tableDate.slice(
                    (this.pageIndex - 1) * this.pageSize,
                    this.pageIndex * this.pageSize
                );
                this.total = this.tableDate.length;
            },
            pageChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.getTableData();
            },
            pageSizeChange(pageSize) {
                this.pageIndex = 1;
                this.pageSize = pageSize;
                this.getTableData();
            }

        }
    }
</script>

<style scoped>
    .bod{
        border: solid 1px #ececec;
        border-radius: 5px;
    }
    .van-button{
        height: 38px;
    }
    .van-button--normal{
        padding: 0 18px;
    }

    .v-table-body-cell{
        height: 50px;
    }
    
    
</style>