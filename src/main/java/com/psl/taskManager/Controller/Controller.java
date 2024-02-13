package com.psl.taskManager.Controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psl.taskManager.Model.Task;
import com.psl.taskManager.Service.Service;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

	@Autowired
	private Service taskService;
	
	@PostMapping("/addTask")
	public Task addtask(@RequestBody Task task)
	{
		System.out.println("We are here");
		LocalDateTime currentDateTime=LocalDateTime.now();
		DateTimeFormatter formater = DateTimeFormatter.ofPattern("dd-MM-yy");
		String formattedDateTime=currentDateTime.format(formater);
		
		String dueDateSplit[]=task.getDueDate().split("-");
		dueDateSplit[0]=dueDateSplit[0].substring(2,4);
		String month=dueDateSplit[2];
		dueDateSplit[2]=dueDateSplit[0];
		dueDateSplit[0]=month;
		task.setStartDate(formattedDateTime);
		task.setStatus("in progress");
		String dueDate="";
	 for(int i=0;i<3;i++)
	 {
	dueDate+=dueDateSplit[i];
	if(i!=2)
	{
		dueDate+="-";
	}
	 }
	 task.setDueDate(dueDate);
	return taskService.addTask(task);	
	}

	@GetMapping("/getTask")
	public List<Task> getTask()
	{
		System.out.println("Api hit");
		return taskService.getTask();
	}
}
