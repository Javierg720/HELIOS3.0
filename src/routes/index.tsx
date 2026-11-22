import { createFileRoute } from "@tanstack/react-router";
import { HeliosApp } from "@/components/helios/app";

export const Route = createFileRoute("/")({
  component: HeliosApp,
});
