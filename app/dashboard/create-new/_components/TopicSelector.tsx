"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { topicSelections } from "@/constants";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const TopicSelector = ({ onUserSelect }: any) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-gray-500">Choose a topic</p>
      <Select
        onValueChange={(value) => {
          setSelectedTopic(value);
          value !== "Custom Prompt" && onUserSelect("topicSelected", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 text-lg">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          {topicSelections.map((topic, index) => (
            <SelectItem key={index} value={topic.value}>
              {topic.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedTopic === "Custom Prompt" && (
        <Textarea
          onChange={(e) => onUserSelect("topicSelected", e.target.value)}
          className="mt-3"
          placeholder="Type your own prompt !"
        />
      )}
    </div>
  );
};

export default TopicSelector;
