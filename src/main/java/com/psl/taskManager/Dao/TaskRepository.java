package com.psl.taskManager.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.psl.taskManager.Model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

}
