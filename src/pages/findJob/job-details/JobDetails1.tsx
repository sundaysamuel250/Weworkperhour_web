import { Badge, Divider, useToast } from "@chakra-ui/react";
import images from "../../../components/constant/Images";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { httpGetWithoutToken, httpGetWithToken, httpPostWithToken } from "../../../utils/http_utils";
import moment from "moment/moment";
import ls from "localstorage-slim";

const JobDetailss = () => {
    const [job, setJob] = useState<any>({})
    const [departments, setDepartments] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const [isUser, setIsUser] = useState(true);

    useEffect(()=> {
        let u:any = ls.get("wwph_usr", {decrypt : true});
        if(u) {
            if(u.role == "Company"){
                setIsUser(false)
            }
        } 
        fetchJob()
    }, [])
    const toast = useToast();
    const navigate = useNavigate();
    const saveJob = async () => {
        const resp = await httpPostWithToken("jobs/saved/"+job?.id);
        if(resp.status == "success") {
            toast({
                status : "success",
                title : "Job saved!",
                isClosable : true,
              })
        }else{
        }
        setLoading(false)

    }
    const fetchJob = async () => {
        const resp = await httpGetWithoutToken("jobs/"+params.slug);
        if(resp.status == "success") {
            setJob(resp.data)
            let depts  = resp.data.departments;
            depts = depts.map((item: any)=> {
                return item.title;
            })
            setDepartments(depts)
            setLoading(false)

        }else{
            toast({
                status : "error",
                title : "Job not found!",
                isClosable : true,
                duration : 5000
              })
              navigate("/");
        }

    }
    const applyJob = async () => {

        let u:any = ls.get("wwph_usr", {decrypt : true});
        if(!u) {
            return toast({
                status : "error",
                title : "Please login first",
                isClosable : true,
                duration : 5000
              })
        }
        const resp = await httpPostWithToken("jobs/apply", {
            job : job.id
        });
        if(resp.status == "success") {
             toast({
                status : "success",
                title : "Job application sent",
                isClosable : true,
                duration : 5000
              })
              return navigate("/candidate-dashboard")
        }else{
            return toast({
                status : "error",
                title : resp.error,
                isClosable : true,
                duration : 5000
              })
        }
    }
    return (
        <>
        {
            loading ? <></>
            :
            <div className="max-w-6xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-[2rem] lg:px-[2rem] py-[2rem]">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-[70%]">
                            {/* banner */}
                            <div>
                                <img src={images["boy1"]} className="h-[300px] object-top w-full object-cover" />
                            </div>

                            <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row my-5">
                                <h3 className="text-[28px] font-bold">{job.title}</h3>
                                <div className="flex gap-3">
                                    <button onClick={saveJob} className="font-sans text-[13px] font-medium min-w-[100px] text-[#ee009d] border-[1px] border-[#ee009d] hover:text-[#EE009D] h-[35px] px-[10px] rounded-[5px] ">Save Job</button>
                                    <button onClick={applyJob} className="font-sans text-[13px] font-medium min-w-[100px] text-[#fff] border-[1px] border-[#ee009d] bg-[#ee009d] hover:text-[#ccc] h-[35px] px-[10px] rounded-[5px] ">Apply Now</button>
                                </div>
                            </div>

                            <Divider />

                            <div className="grid grid-cols-2 md:grid-cols-3 mt-[20px] lg:grid-cols-3">
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Department:</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{departments[0]}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Work Type</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{job.work_type.title}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Job Type</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{job.job_type.title}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Salary</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{job.salary_narration}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Location</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{job.location}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Education</p>
                                    <p className="text-[16px] text-[#333] mt-2 font-[500]">{job.education}</p>
                                </div>

                            </div>

                            <div className="flex justify-between mt-[20px]">
                                <div className="mb-5">
                                    <p className="text-[15px] text-[#646a73]">Posted on: {moment(job.date_posted).format("MMM, DD Y")}</p>
                                </div>
                                <div className="mb-5">
                                <p className="text-[15px] text-[#646a73]">Posted on: {moment(job.date_posted).format("MMM, DD Y")}</p>

                                </div>
                            </div>

                            <div className="mt-[30px]">
                                <h3 className="font-[600] text-[22px] text-[#111111]">Job Description</h3>
                                <div className="mb-5 mt-4">
                                    <p className="text-[15px] text-[#646a73]">{job.description}</p>
                                    
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <h3 className="font-[600] text-[22px] text-[#111111]">Requirment</h3>
                                <div className="mb-5 mt-4">
                                    <p className="text-[15px] text-[#646a73]">{job.requirements}</p>
                                </div>
                                <br />
                            </div>
                            <Divider />
                            {
                                job.benefits
                                &&
                            <div className="mt-[30px]">
                                <h3 className="font-[600] text-[22px] text-[#111111]">Benefits</h3>
                                <div className="mb-5 mt-4 flex flex-wrap gap-5">
                                    {
                                        job.benefits.split(",").map((item : string, i : number) => (
                                            <Badge key={i} bg={"#eee"} p={"2"} rounded={8} color={"#EE009D"}>{item}</Badge>
                                        ))
                                    }
                                  
                                </div>
                                <br />
                            </div>
                            }


                            <Divider />
                            <div className="mt-[30px]">
                                <p>Please check the requirements above before applying for a Job. <span className="text-red-700">*</span> </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[30%]">
                            <div className="p-2">
                                <div className="w-full flex justify-center my-5 text-center">
                                    <img src={job.company.avatar ? job.company.avatar : images["Logo"]} className="h-[80px] object-contain" />
                                </div>
                                <Divider />
                                <div className="mb-5 mt-5">
                                    <p className="text-[14px] text-[#646a73]">Company</p>
                                    <p className="text-[16px] text-[#111111] mt-2 font-bold">{job.company.company_name}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[14px] text-[#646a73]">Address</p>
                                    <p className="text-[16px] text-[#111111] mt-2 font-bold">{job.company.address}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[14px] text-[#646a73]">Company Size</p>
                                    <p className="text-[16px] text-[#111111] mt-2 font-bold">{job.company.company_size} Employees</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-[14px] text-[#646a73]">Website</p>
                                    <p className="text-[16px] mt-2 font-bold text-[#2aa100]"><a href="https://google.com">www.google.com</a></p>
                                </div>

                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        }

        </>
    );
}

export default JobDetailss;