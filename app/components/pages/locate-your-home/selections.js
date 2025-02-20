"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Spinner from "@/app/components/shared/spinner";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/ui/select";

export default function LocateYourHomeSelections({ developers }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const [projects, setProjects] = useState([]);

    const [unitAreas, setUnitAreas] = useState([]);

    const [projectsLoading, setProjectsLoading] = useState(false);

    const [unitAreasLoading, setUnitAreasLoading] = useState(false);

    const {
        developer,
        mode,
        project,
        setDeveloper,
        setProject,
        setUnitArea,
        unitArea,
    } = useLocateYourHomeStore();

    useEffect(
        () => {
            if (developer?.id) {
                setProjectsLoading(true);

                fetch(`${backendUrl}Developer/${developer.id}/ProjectsIDAndNames`).then((response) => {
                    setProjectsLoading(false);

                    return response.json();
                }).then((data) => setProjects(data));
            }
        },
        [developer], // eslint-disable-line
    );

    useEffect(
        () => {
            if (project?.id) {
                setUnitAreasLoading(true);

                fetch(`${backendUrl}Project/by-id/${project.id}/available-apartment-spaces`).then((response) => {
                    setUnitAreasLoading(false);

                    return response.json();
                }).then((data) => setUnitAreas(data));
            }
        },
        [project], // eslint-disable-line
    );

    return (
        <div className="container mx-auto pt-[47px] md:pt-[94px] pb-[50px] md:pb-[100px]">
            <div className="relative max-w-[1018px] h-[834px] mx-auto px-5 lg:px-0">
                <Image
                    alt="selections_bg"
                    className="rounded-2xl"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src="/images/pages/locate-your-home/selections.webp"
                />
                <div className="flex justify-end flex-col max-w-[735px] h-[90%] mx-auto">
                    <div className="relative z-50 flex flex-col gap-5 md:gap-10">
                        <Select
                            defaultValue={developer.id}
                            disabled={mode === "edit"}
                            value={developer.id}
                            onValueChange={(value) => setDeveloper({
                                id: value,
                                name: developers.find(({ developerid }) => developerid === value).developername,
                            })}
                        >
                            <SelectTrigger className="text-[500] text-[22px] md:text-[32px] border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full cursor-pointer primary-select">
                                <SelectValue placeholder="Developer" />
                            </SelectTrigger>
                            <SelectContent>
                                {developers.map(({
                                    developerid,
                                    developername,
                                }) => (
                                    <SelectItem
                                        key={developerid}
                                        value={developerid}
                                    >
                                        {developername}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select
                            defaultValue={project.id}
                            disabled={!developer?.id || projects.length === 0 || mode === "edit"}
                            value={project.id}
                            onValueChange={(value) => setProject({
                                id: value,
                                name: projects.find(({ projectid }) => projectid === value).projectname,
                            })}
                        >
                            <SelectTrigger className="text-[500] text-[22px] md:text-[32px] border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full cursor-pointer primary-select">
                                <SelectValue placeholder="Project" />
                                {projectsLoading && (
                                    <Spinner
                                        className="!w-[50px] absolute right-10"
                                        color="text-white"
                                        height="h-20"
                                    />
                                )}
                            </SelectTrigger>
                            <SelectContent>
                                {projects.map(({
                                    projectid,
                                    projectname,
                                }) => (
                                    <SelectItem
                                        key={projectid}
                                        value={projectid}
                                    >
                                        {projectname}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {mode === "edit" && !localStorage.getItem("unitAreaId") ? null : ( // eslint-disable-line
                            <Select
                                defaultValue={mode === "edit" ? parseInt(localStorage.getItem("unitAreaId")) : unitArea.id} // eslint-disable-line
                                disabled={!project?.id || unitAreas.length === 0 || mode === "edit"}
                                value={mode === "edit" ? parseInt(localStorage.getItem("unitAreaId")) : unitArea.id} // eslint-disable-line
                                onValueChange={(value) => setUnitArea({
                                    id: value,
                                    space: unitAreas.find(({ apartmentid }) => apartmentid === value).apartmentspace,
                                })}
                            >
                                <SelectTrigger className="text-[500] text-[22px] md:text-[32px] border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full cursor-pointer primary-select">
                                    <SelectValue placeholder="Unit Area" />
                                    {unitAreasLoading && (
                                        <Spinner
                                            className="!w-[50px] absolute right-10"
                                            color="text-white"
                                            height="h-20"
                                        />
                                    )}
                                </SelectTrigger>
                                <SelectContent>
                                    {unitAreas.map(({
                                        apartmentid,
                                        apartmentspace,
                                    }) => (
                                        <SelectItem
                                            key={apartmentid}
                                            value={apartmentid}
                                        >
                                            {apartmentspace}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mt-4 md:mt-8 flex justify-end">
                <Link
                    className="font-normal text-lg md:text-2xl underline float-right"
                    href="/build-your-kit"
                    prefetch={false}
                >
                    Can&apos;t find your Unit?
                </Link>
            </div>
        </div>
    );
}
